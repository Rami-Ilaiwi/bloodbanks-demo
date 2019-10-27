import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EnhancedTableHead from "./EnhancedTableHead";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "../styles/styles";
import Button from "@material-ui/core/Button";
import { stableSort, getSorting } from "../utils/utils";
import { BloodBank, OrderType } from "../types/types";
import BloodPagination from "./BloodPagination";

interface BloodBankTableProps {
  data: Array<BloodBank>;
}

const BloodBankTable: React.FC<
  BloodBankTableProps & WithStyles<typeof styles>
> = ({ classes, data }) => {
  const [order, setOrder] = useState<OrderType>("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tableContent, setTableContent] = useState<Array<BloodBank>>(data);

  const handleRequestSort = (event: any, property: any) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchHospital = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const item = event.target.value.toLowerCase();
    const prevContent = tableContent;
    setTableContent(
      prevContent.filter(i => {
        return i.hospital.toLowerCase().search(item) !== -1;
      })
    );
  };

  const handleSearchCity = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const item = event.target.value.toLowerCase();
    const prevContent = tableContent;
    console.log(
      prevContent.filter(i => i.city.toLowerCase().search(item) !== -1)
    );
    setTableContent(
      prevContent.filter(i => {
        return i.city.toLowerCase().search(item) !== -1;
      })
    );
  };

  const handleSearchBloodType = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const item = event.target.value.toLowerCase();
    const prevContent = tableContent;
    setTableContent(
      prevContent.filter(i => {
        return i.bloodType.toLowerCase().search(item) !== -1;
      })
    );
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
            {stableSort(tableContent, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: BloodBank, index: any) => {
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

export default withStyles(styles)(BloodBankTable);
