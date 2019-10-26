import { createBloodBankBloodType } from "../utils/utils";

export type OrderType = "desc" | "asc" | undefined;
export type BloodBank = ReturnType<typeof createBloodBankBloodType>;
