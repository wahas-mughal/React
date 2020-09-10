import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transactions from './Transactions';

function TransactionList() {
  const { transactions } = useContext(GlobalContext); // destructure (get) the transactions from GlobalContext by useContext hook
 
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transactions key = {transaction.id} transaction = {transaction}/> // maps the transactions and pass them as props to Transactions component
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
