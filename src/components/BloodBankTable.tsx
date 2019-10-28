import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EnhancedTableHead from "./EnhancedTableHead";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "../styles/styles";
import Button from "@material-ui/core/Button";
import { BloodBank, OrderType } from "../types/types";
import BloodPagination from "./BloodPagination";
import { connect } from "react-redux";
import {
  setPageNumber,
  setRowsPerPage
} from "../store/actions/bloodBankActions";
import {
  selectPageNumber,
  selectRowsPerPage,
  selectRows,
  selectOrder,
  selectOrderBy,
  selectSortedRows
} from "../store/selectors/data";
import { setOrderBy, setOrder } from "../store/actions/sortAction";
import {
  setFilterByHospital,
  setFilterByCity,
  setFilterByBloodType
} from "../store/actions/searchDataAction";

interface BloodBankTableProps {
  data: Array<BloodBank>;
  onChangePage: (page: number) => void;
  page: number;
  onChangeRowsPerPage: (rows: number) => void;
  rowsPerPage: number;
  onOrder: (order: OrderType) => void;
  onOrderBy: (orderBy: string) => void;
  rows: Array<BloodBank>;
  order: OrderType;
  orderBy: string;
  onChangeSearchHospitalInput: (hospitalSearch: string) => void;
  onChangeSearchCityInput: (hospitalSearch: string) => void;
  onChangeSearchBloodTypeInput: (hospitalSearch: string) => void;
}

const BloodBankTable: React.FC<
  BloodBankTableProps & WithStyles<typeof styles>
> = ({
  classes,
  data,
  onChangePage,
  page,
  onChangeRowsPerPage,
  rowsPerPage,
  onOrderBy,
  onOrder,
  rows,
  order,
  orderBy,
  onChangeSearchHospitalInput,
  onChangeSearchCityInput,
  onChangeSearchBloodTypeInput
}) => {
  const handleRequestSort = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    property: any
  ) => {
    const isDesc = orderBy === property && order === "desc";
    onOrder(isDesc ? "asc" : "desc");
    onOrderBy(property);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChangeRowsPerPage(parseInt(event.target.value, 10));
    onChangePage(0);
  };

  const handleSearchHospital = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChangeSearchHospitalInput(event.target.value.toLowerCase());
  };

  const handleSearchCity = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChangeSearchCityInput(event.target.value.toLowerCase());
  };

  const handleSearchBloodType = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChangeSearchBloodTypeInput(event.target.value.toLowerCase());
  };

  return (
    <Paper className={classes.root}>
      <div>
        <Table aria-labelledby="tableTitle" aria-label="enhanced table">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            onSearchHospital={handleSearchHospital}
            onSearchBloodType={handleSearchBloodType}
            onSearchCity={handleSearchCity}
          />
          <TableBody>
            {rows.map((row: BloodBank, index: any) => {
              return (
                <TableRow key={index}>
                  <TableCell>{row.hospital}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.bloodType}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.expire}</TableCell>
                  <TableCell>
                    <Button>Show Details</Button>
                  </TableCell>
                  <TableCell>
                    <Button>Request</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <BloodPagination
        data={data}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </Paper>
  );
};

const styledTable = withStyles(styles)(BloodBankTable);

const mapStateToProps = (state: any) => ({
  data: selectSortedRows(state),
  page: selectPageNumber(state),
  rowsPerPage: selectRowsPerPage(state),
  rows: selectRows(state),
  order: selectOrder(state),
  orderBy: selectOrderBy(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  onChangePage: (page: number) => dispatch(setPageNumber(page)),
  onChangeRowsPerPage: (rows: number) => dispatch(setRowsPerPage(rows)),
  onOrder: (order: OrderType) => dispatch(setOrder(order)),
  onOrderBy: (field: string) => dispatch(setOrderBy(field)),
  onChangeSearchHospitalInput: (hospitalSearch: string) =>
    dispatch(setFilterByHospital(hospitalSearch)),
  onChangeSearchCityInput: (citySearch: string) =>
    dispatch(setFilterByCity(citySearch)),
  onChangeSearchBloodTypeInput: (bloodTypeSearch: string) =>
    dispatch(setFilterByBloodType(bloodTypeSearch))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledTable);
