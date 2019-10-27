import { createReducer } from "redux-act";
import { createBloodBank } from "../../utils/utils";
import { BloodBank } from "../../types/types";

const data = [
  ...createBloodBank("Ramallah", "Ramallah Hospital"),
  ...createBloodBank("Ramallah", "Arab Care Hospital"),
  ...createBloodBank("Nablus", "Najah University Hospital")
];

const storeState = {
  filter: {
    filterByHospitalName: "",
    filterByCity: "",
    filterByBlodType: ""
  },
  rawData: data
};

const dataReducer = createReducer<Array<BloodBank>>({}, data);

export default dataReducer;
