import { combineReducers } from "redux";
import data from "./data";
import pagination from "./pagination";
import sortData from "./sortData";
import searchData from "./searchData";
import {
  PaginationType,
  BloodBank,
  SortType,
  SearchType
} from "../../types/types";

export interface IState {
  data: Array<BloodBank>;
  pagination: PaginationType;
  sortData: SortType;
  searchData: SearchType;
}

export default combineReducers({
  data,
  pagination,
  sortData,
  searchData
});
