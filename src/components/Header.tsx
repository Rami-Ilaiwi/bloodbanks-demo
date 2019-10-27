import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <Toolbar>
      <Typography variant="h6" id="tableTitle">
        Blood Banks
      </Typography>
    </Toolbar>
  );
};

export default Header;
