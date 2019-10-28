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

export const selectSortedRows = (state: IState) => {
  return stableSort(
    selectTableContent(state),
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

// stableSort(rows, getSorting(order, orderBy)).map(
