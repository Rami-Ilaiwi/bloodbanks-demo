import React from "react";
import BloodBankTable from "../components/BloodBankTable";
import { connect } from "react-redux";
import { selectTableContent } from "../store/selectors/data";
import Header from "../components/Header";

const EnhancedTable = () => {
  return (
    <>
      <Header />
      <BloodBankTable />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  data: selectTableContent(state)
});

export default connect(mapStateToProps)(EnhancedTable);
