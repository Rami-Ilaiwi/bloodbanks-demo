import { createBloodBankBloodType } from "../utils/utils";

export type OrderType = "desc" | "asc" | undefined;
export type BloodBank = ReturnType<typeof createBloodBankBloodType>;

export interface PaginationType {
  pageNumber: number;
  rowsPerPage: number;
}

export interface SortType {
  orderBy: string;
  order: OrderType;
}

export interface SearchType {
  filterByHospital: string;
  filterByCity: string;
  filterByBloodType: string;
}
