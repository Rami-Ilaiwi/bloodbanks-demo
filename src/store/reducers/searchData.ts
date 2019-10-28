import { createReducer } from "redux-act";
import { SearchType } from "../../types/types";
import {
  setFilterByHospital,
  setFilterByCity,
  setFilterByBloodType
} from "../actions/searchDataAction";

const searchState: SearchType = {
  filterByHospital: "",
  filterByCity: "",
  filterByBloodType: ""
};

const searchDataReducer = createReducer<SearchType>({}, searchState);
searchDataReducer
  .on(setFilterByHospital, (state, filterByHospital) => {
    return { ...state, filterByHospital };
  })
  .on(setFilterByCity, (state, filterByCity) => {
    return { ...state, filterByCity };
  })
  .on(setFilterByBloodType, (state, filterByBloodType) => {
    return { ...state, filterByBloodType };
  });
export default searchDataReducer;
