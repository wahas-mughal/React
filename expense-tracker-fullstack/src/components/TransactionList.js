import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transactions from './Transactions';

function TransactionList() {
  const { transactions, getTransactions} = useContext(GlobalContext); // destructure (get) the transactions from GlobalContext by useContext hook
 
  // whenever we want to make a http request from a component use useEffect
  useEffect(() => {
   getTransactions();
   
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transactions key = {transaction._id} transaction = {transaction}/> // maps the transactions and pass them as props to Transactions component
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
