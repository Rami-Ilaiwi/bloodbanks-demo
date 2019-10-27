import { IState } from "../reducers";

export const selectData = (state: IState) => state.data;
export const selectTableContent = (state: IState) => selectData(state).rawData;
export const selectPageNumber = (state: IState) => selectData(state).pageNumber;
