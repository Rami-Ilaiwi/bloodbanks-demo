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
import { stableSort, getSorting } from "../utils/utils";
import { BloodBank, OrderType } from "../types/types";
import BloodPagination from "./BloodPagination";

interface BloodBankTableProps {
  data: Array<BloodBank>;
}

const BloodBankTable: React.FC<
  BloodBankTableProps & WithStyles<typeof styles>
> = ({ classes, data }) => {
  const [order, setOrder] = React.useState<OrderType>("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event: any, property: any) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div>
        <Table aria-labelledby="tableTitle" aria-label="enhanced table">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(data, getSorting(order, orderBy))
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
