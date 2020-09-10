import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transactions({ transaction }) {
  const { deleteTransactions } = useContext(GlobalContext); // destructure (get) the deleteTransactions function from GlobalContext by useContext hook

  const sign = transaction.amount < 0 ? "-" : "+"; // if the transaction amount is < 0 than put minus else put plus

  return (
    // transaction history
     //if the transaction amount is < 0 than put minus CSS class else put plus CSS class
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {" "}
      {transaction.expense} {/*render transaction description (expense) */}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}{" "}
        {/*render transaction amount */}
        {/*Math.abs makes the transaction absolute (positive)*/}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransactions(transaction.id)}
      >
        x
      </button>
      {/*pass the transaction id to the deleteTransactions function created in GlobalState when the user clicks on delete button*/}
    </li>
  );
}

export default Transactions;
