import { createReducer } from "redux-act";
import { PaginationType } from "../../types/types";
import { setPageNumber, setRowsPerPage } from "../actions/bloodBankActions";

const paginationState = {
  pageNumber: 0,
  rowsPerPage: 5
};

const paginationReducer = createReducer<PaginationType>({}, paginationState);
paginationReducer
  .on(setPageNumber, (state, payload) => {
    return { ...state, pageNumber: payload };
  })
  .on(setRowsPerPage, (state, payload) => {
    return { ...state, rowsPerPage: payload };
  });
export default paginationReducer;
