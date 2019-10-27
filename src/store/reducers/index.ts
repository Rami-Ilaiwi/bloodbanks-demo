import { combineReducers } from "redux";
import data from "./data";
import { BloodBank, BloodBankData } from "../../types/types";

export interface IState {
  data: BloodBankData;
}

export default combineReducers({
  data
});
