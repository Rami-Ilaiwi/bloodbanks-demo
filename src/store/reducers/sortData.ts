import { createReducer } from "redux-act";
import { SortType } from "../../types/types";
import { setSortField } from "../actions/sortAction";

const fieldState = {
  field: "hospital"
};

const sortDataReducer = createReducer<SortType>({}, fieldState);
sortDataReducer.on(setSortField, (state, payload) => {
  return { ...state, field: payload };
});
export default sortDataReducer;
