import { createReducer } from "redux-act";
import { SortType, OrderType } from "../../types/types";
import { setOrderBy, setOrder } from "../actions/sortAction";

interface FieldStateType {
  orderBy: string;
  order: OrderType;
}

const fieldState: FieldStateType = {
  orderBy: "hospital",
  order: "asc"
};

const sortDataReducer = createReducer<SortType>({}, fieldState);
sortDataReducer
  .on(setOrderBy, (state, payload) => {
    return { ...state, orderBy: payload };
  })
  .on(setOrder, (state, payload) => {
    return { ...state, order: payload };
  });
export default sortDataReducer;
