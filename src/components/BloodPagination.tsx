import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { BloodBank } from "../types/types";

interface BloodPaginationProps {
  data: Array<BloodBank>;
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
  onChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  page: number;
  rowsPerPage: number;
}

const BloodPagination: React.FC<BloodPaginationProps> = ({
  data,
  onChangePage,
  onChangeRowsPerPage,
  page,
  rowsPerPage
}) => {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={data.length}
      rowsPerPage={rowsPerPage}
      page={page}
      backIconButtonProps={{
        "aria-label": "previous page"
      }}
      nextIconButtonProps={{
        "aria-label": "next page"
      }}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
    />
  );
};

export default BloodPagination;
