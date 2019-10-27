import { createBloodBankBloodType } from "../utils/utils";

export type OrderType = "desc" | "asc" | undefined;
export type BloodBank = ReturnType<typeof createBloodBankBloodType>;

export interface BloodBankData {
  filter: {
    filterByHospitalName: string;
    filterByCity: string;
    filterByBlodType: string;
  };
  rawData: {
    city: string;
    hospital: string;
    bloodType: string;
    quantity: number;
    expire: string;
  }[];
}
