import { createAction } from "redux-act";
import { OrderType } from "../../types/types";

export const setOrderBy = createAction<string>("Set sort field");
export const setOrder = createAction<OrderType>("Set order");
