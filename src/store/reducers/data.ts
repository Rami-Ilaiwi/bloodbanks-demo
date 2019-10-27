import { createReducer } from "redux-act";
import { createBloodBankBloodType } from "../../utils/utils";
import { BloodBank } from "../../types/types";
import { setPageNumber, setRowsPerPage } from "../actions/bloodBankActions";

const createBloodBank = (city: string, hospital: string) => [
  createBloodBankBloodType(city, hospital, "AB+"),
  createBloodBankBloodType(city, hospital, "AB-"),
  createBloodBankBloodType(city, hospital, "A+"),
  createBloodBankBloodType(city, hospital, "A-"),
  createBloodBankBloodType(city, hospital, "B+"),
  createBloodBankBloodType(city, hospital, "B-"),
  createBloodBankBloodType(city, hospital, "O+"),
  createBloodBankBloodType(city, hospital, "O-")
];

const data = [
  ...createBloodBank("Ramallah", "Ramallah Hospital"),
  ...createBloodBank("Ramallah", "Arab Care Hospital"),
  ...createBloodBank("Nablus", "Najah University Hospital")
];

const dataReducer = createReducer<Array<BloodBank>>({}, data);
dataReducer
  .on(setPageNumber, (state, payload) => {
    return { ...state, pageNumber: payload };
  })
  .on(setRowsPerPage, (state, payload) => {
    return { ...state, rowsPerPage: payload };
  });
export default dataReducer;
