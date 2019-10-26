import moment from "moment";

const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const randomFutureDate = () =>
  randomDate(new Date(2020, 0, 1), new Date(2022, 5, 8));

export const createBloodBankBloodType = (
  city: string,
  hospital: string,
  bloodType: string
) => ({
  city,
  hospital,
  bloodType,
  quantity: Math.floor(Math.random() * 15),
  expire: moment(randomFutureDate()).format("D/MM/YYYY HH:mm")
});

export const createBloodBank = (city: string, hospital: string) => [
  createBloodBankBloodType(city, hospital, "AB+"),
  createBloodBankBloodType(city, hospital, "AB-"),
  createBloodBankBloodType(city, hospital, "A+"),
  createBloodBankBloodType(city, hospital, "A-"),
  createBloodBankBloodType(city, hospital, "B+"),
  createBloodBankBloodType(city, hospital, "B-"),
  createBloodBankBloodType(city, hospital, "O+"),
  createBloodBankBloodType(city, hospital, "O-")
];

export const desc = (a: any, b: any, orderBy: any) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const stableSort = (array: any[], cmp: any) => {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
};

export const getSorting = (order: any, orderBy: any) => {
  return order === "desc"
    ? (a: any, b: any) => desc(a, b, orderBy)
    : (a: any, b: any) => -desc(a, b, orderBy);
};