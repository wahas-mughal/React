import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext); // destructure (get) the transactions from GlobalContext by useContext hook
  const amounts = transactions.map((transaction) => transaction.amount); // maps the transaction amounts
  const income = amounts
    .filter((item) => item > 0) //amount should be greater than 0
    .reduce((acc, item) => (acc += item), 0) //add or subtract (reduce) each amount in the transaction array
    .toFixed(2); // 2 zeros after decimal

  const expense = (
    amounts.filter((item) => item < 0) //amount should be less than 0
    .reduce((acc, item) => (acc += item), 0) * //add or subtract (reduce) each amount in the transaction array and multiply by -1
    -1 
  ).toFixed(2); // 2 zeros after decimal

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p> {/*render income*/}
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p> {/*render expense*/}
      </div>
    </div>
  );
}

export default IncomeExpense;
