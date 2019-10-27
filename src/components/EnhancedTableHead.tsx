import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Input from "@material-ui/core/Input";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "../styles/styles";

const headCells = [
  {
    id: "hospital",
    numeric: false,
    disablePadding: true,
    label: "Hospital"
  },
  { id: "city", numeric: true, disablePadding: false, label: "City" },
  {
    id: "bloodType",
    numeric: true,
    disablePadding: false,
    label: "Blood Type"
  },
  {
    id: "quantity",
    numeric: true,
    disablePadding: false,
    label: "Available Quantity"
  },
  { id: "expire", numeric: true, disablePadding: false, label: "Expire" },
  { id: "details", numeric: true, disablePadding: false },
  { id: "request", numeric: true, disablePadding: false }
];

interface EnhancedTableHeadProps {
  order: "desc" | "asc" | undefined;
  orderBy: string;
  onRequestSort: (event: any, property: any) => void;
  onSearchHospital: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onSearchCity: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onSearchBloodType: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}
const EnhancedTableHead: React.FC<
  EnhancedTableHeadProps & WithStyles<typeof styles>
> = ({
  order,
  orderBy,
  onRequestSort,
  classes,
  onSearchHospital,
  onSearchCity,
  onSearchBloodType
}) => {
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell key={headCell.id}>
            <TableSortLabel
              className={classes.head}
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
            {headCell.id === "hospital" ||
            headCell.id === "city" ||
            headCell.id === "bloodType" ? (
              <Input
                placeholder="Search"
                className={classes.searchInput}
                onChange={
                  headCell.id === "hospital"
                    ? onSearchHospital
                    : headCell.id === "city"
                    ? onSearchCity
                    : onSearchBloodType
                }
                id={headCell.id}
              />
            ) : null}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default withStyles(styles)(EnhancedTableHead);
