import { createReducer } from "redux-act";
import { SortType } from "../../types/types";
import { setOrderBy, setOrder } from "../actions/sortAction";

const fieldState: SortType = {
  orderBy: "hospital",
  order: "asc"
};

const sortDataReducer = createReducer<SortType>({}, fieldState);
sortDataReducer
  .on(setOrderBy, (state, orderBy) => {
    return { ...state, orderBy };
  })
  .on(setOrder, (state, order) => {
    return { ...state, order };
  });
export default sortDataReducer;
