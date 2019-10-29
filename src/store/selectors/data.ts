import { IState } from "../reducers";
import { stableSort, getSorting } from "../../utils/utils";
import { createSelector } from "reselect";

export const selectTableContent = (state: IState) => state.data;
export const selectPageNumber = (state: IState) => state.pagination.pageNumber;
export const selectRowsPerPage = (state: IState) =>
  state.pagination.rowsPerPage;

export const selectSort = (state: IState) => {
  return state.sortData;
};

export const selectOrder = (state: IState) => selectSort(state).order;

export const selectOrderBy = (state: IState) => selectSort(state).orderBy;

export const selectFilterByHospital = (state: IState) =>
  state.searchData.filterByHospital;

export const selectFilterByCity = (state: IState) =>
  state.searchData.filterByCity;

export const selectFilterByBloodType = (state: IState) =>
  state.searchData.filterByBloodType;

export const selectFilteredRows = createSelector(
  selectTableContent,
  selectFilterByHospital,
  selectFilterByCity,
  selectFilterByBloodType,
  (items, filterByHospital, filterByCity, filterByBloodType) =>
    items
      .filter(hospitalSearch =>
        hospitalSearch.hospital.toLowerCase().includes(filterByHospital)
      )
      .filter(citySearch =>
        citySearch.city.toLowerCase().includes(filterByCity)
      )
      .filter(bloodTypeSearch =>
        bloodTypeSearch.bloodType.toLowerCase().includes(filterByBloodType)
      )
);

export const selectSortedRows = createSelector(
  selectFilteredRows,
  selectOrder,
  selectOrderBy,
  (items, order, orderBy) => stableSort(items, getSorting(order, orderBy))
);

export const selectPaginatedRows = createSelector(
  selectSortedRows,
  selectPageNumber,
  selectRowsPerPage,
  (items, pageNumber, rowsPerPage) =>
    items.slice(
      pageNumber * rowsPerPage,
      pageNumber * rowsPerPage + rowsPerPage
    )
);

export const selectRows = (state: IState) => selectPaginatedRows(state);
