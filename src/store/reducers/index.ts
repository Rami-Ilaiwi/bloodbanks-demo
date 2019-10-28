import { combineReducers } from "redux";
import data from "./data";
import pagination from "./pagination";
import sortData from "./sortData";
import { PaginationType, BloodBank, SortType } from "../../types/types";

export interface IState {
  data: Array<BloodBank>;
  pagination: PaginationType;
  sortData: SortType;
}

export default combineReducers({
  data,
  pagination,
  sortData
});
