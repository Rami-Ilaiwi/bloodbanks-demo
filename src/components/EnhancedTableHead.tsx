import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";

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
}
const EnhancedTableHead: React.FC<EnhancedTableHeadProps> = ({
  order,
  orderBy,
  onRequestSort
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
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
