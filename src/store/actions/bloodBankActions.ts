import { createAction } from "redux-act";

export const setPageNumber = createAction<number>("Set page number");
export const setRowsPerPage = createAction<number>("Set rows per page");
