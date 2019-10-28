import { createAction } from "redux-act";

export const setFilterByHospital = createAction<string>(
  "Set search by hospital"
);
export const setFilterByCity = createAction<string>("Set search by city");
export const setFilterByBloodType = createAction<string>(
  "Set search by blood type"
);
