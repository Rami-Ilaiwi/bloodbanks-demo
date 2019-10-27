import React from "react";
import BloodBankTable from "../components/BloodBankTable";
import { connect } from "react-redux";
import { BloodBank } from "../types/types";
import { selectData } from "../store/selectors/data";
import Header from "../components/Header";

interface EnhancedTableProps {
  data: Array<BloodBank>;
}

const EnhancedTable: React.FC<EnhancedTableProps> = ({ data }) => {
  return (
    <>
      <Header />
      <BloodBankTable data={data} />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  data: selectData(state)
});

export default connect(mapStateToProps)(EnhancedTable);
