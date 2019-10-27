import { createReducer } from "redux-act";
import { createBloodBankBloodType } from "../../utils/utils";
import { BloodBank, BloodBankData } from "../../types/types";
import { setPageNumber } from "../actions/bloodBankActions";

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

const storeState = {
  //   filter: {
  //     filterByHospitalName: "",
  //     filterByCity: "",
  //     filterByBlodType: ""
  //   },
  pageNumber: 0,
  rawData: data
};

const dataReducer = createReducer<BloodBankData>({}, storeState);
dataReducer.on(setPageNumber, (state, payload) => {
  return { ...state, pageNumber: payload };
});
export default dataReducer;
