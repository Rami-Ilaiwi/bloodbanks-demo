import { IState } from "../reducers";
import { stableSort, getSorting } from "../../utils/utils";

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

export const selectFilteredRows = (state: IState) => {
  return selectTableContent(state)
    .filter(hospitalSearch =>
      hospitalSearch.hospital
        .toLowerCase()
        .includes(selectFilterByHospital(state))
    )
    .filter(citySearch =>
      citySearch.city.toLowerCase().includes(selectFilterByCity(state))
    )
    .filter(bloodTypeSearch =>
      bloodTypeSearch.bloodType
        .toLowerCase()
        .includes(selectFilterByBloodType(state))
    );
};

export const selectSortedRows = (state: IState) => {
  return stableSort(
    selectFilteredRows(state),
    getSorting(selectOrder(state), selectOrderBy(state))
  );
};

export const selectPaginatedRows = (state: IState) => {
  return selectSortedRows(state).slice(
    selectPageNumber(state) * selectRowsPerPage(state),
    selectPageNumber(state) * selectRowsPerPage(state) +
      selectRowsPerPage(state)
  );
};
export const selectRows = (state: IState) => selectPaginatedRows(state);
