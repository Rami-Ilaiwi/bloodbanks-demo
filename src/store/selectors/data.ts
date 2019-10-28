import { IState } from "../reducers";

export const selectTableContent = (state: IState) => state.data;
export const selectPageNumber = (state: IState) => state.pagination.pageNumber;
export const selectRowsPerPage = (state: IState) =>
  state.pagination.rowsPerPage;

// export const selectSortedRows = ;
export const selectPaginatedRows = (state: IState) => {
  return selectTableContent(state).slice(
    selectPageNumber(state) * selectRowsPerPage(state),
    selectPageNumber(state) * selectRowsPerPage(state) +
      selectRowsPerPage(state)
  );
};
export const selectRows = (state: IState) => selectPaginatedRows(state);
