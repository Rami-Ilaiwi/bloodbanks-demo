import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createBloodBank } from "./utils/utils";
import BloodBankTable from "./components/BloodBankTable";

const EnhancedTable = () => {
  const data = [
    ...createBloodBank("Ramallah", "Ramallah Hospital"),
    ...createBloodBank("Ramallah", "Arab Care Hospital"),
    ...createBloodBank("Nablus", "Najah University Hospital")
  ];

  return (
    <>
      <Toolbar>
        <Typography variant="h6" id="tableTitle">
          Blood Banks
        </Typography>
      </Toolbar>
      <BloodBankTable data={data} />
    </>
  );
};

export default EnhancedTable;
