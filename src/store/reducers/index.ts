import { combineReducers } from "redux";
import data from "./data";
import pagination from "./pagination";
import { PaginationType, BloodBank } from "../../types/types";

export interface IState {
  data: Array<BloodBank>;
  pagination: PaginationType;
}

export default combineReducers({
  data,
  pagination
});
