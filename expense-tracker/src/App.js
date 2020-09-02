import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
        <div className="container">
          <div className="bal-income-container">
            <Balance />
            <IncomeExpense />
            <TransactionList />
          </div>
            <AddTransaction />
        </div>
    </GlobalProvider>
  );
}

export default App;
