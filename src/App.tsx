import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import BloodBankPage from "./pages/BloodBankPage";

const EnhancedTable = () => {
  return (
    <Provider store={store}>
      <BloodBankPage />
    </Provider>
  );
};

export default EnhancedTable;
