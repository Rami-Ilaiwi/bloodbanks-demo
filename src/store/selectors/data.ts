import { IState } from "../reducers";

export const selectTableContent = (state: IState) => state.data;
export const selectPageNumber = (state: IState) => state.pagination.pageNumber;
export const selectRowsPerPage = (state: IState) =>
  state.pagination.rowsPerPage;
