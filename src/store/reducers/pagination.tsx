import { createReducer } from "redux-act";
import { PaginationType } from "../../types/types";
import { setPageNumber, setRowsPerPage } from "../actions/bloodBankActions";

const paginationState = {
  pageNumber: 0,
  rowsPerPage: 5
};

const paginationReducer = createReducer<PaginationType>({}, paginationState);
paginationReducer
  .on(setPageNumber, (state, pageNumber) => {
    return { ...state, pageNumber };
  })
  .on(setRowsPerPage, (state, rowsPerPage) => {
    return { ...state, rowsPerPage };
  });
export default paginationReducer;
