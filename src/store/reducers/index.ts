import { combineReducers } from "redux";
import data from "./data";
import { BloodBank } from "../../types/types";

export interface IState {
  data: Array<BloodBank>;
}

export default combineReducers({
  data
});
