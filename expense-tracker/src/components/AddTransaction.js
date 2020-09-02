import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const [expense, setExpense] = useState(""); //set description in the expense state by setExpense function
  const [amount, setAmount] = useState(""); //set amount in the amount state by setAmount function
  const { addTransactions } = useContext(GlobalContext); // destructure addTransactions function from GlobalContext by useContext hook

  const onSubmit = (e) => {
    // prevent a default submit behaviour of a button
    e.preventDefault();

    // generate new transaction with id, expense (description) and amount
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      expense: expense,
      amount: parseInt(amount),
    };
    // submit new transactions to addTransaction function when the form submits
    addTransactions(newTransaction);
  };

  return (
    <div className = "add-transaction">
      <h3>Add new transaction</h3>

      {/* execute onSubmit function on form submission */}
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Expense</label>
          <input
            type="text"
            value={expense} // set the input value
            placeholder="Enter your expense..."
            onChange={(e) => setExpense(e.target.value)} //Read the value from the input as it change and set the state 
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount} // set the input value
            placeholder="Enter your amount..."
            onChange={(e) => setAmount(e.target.value)} //Read the value from the input as it change and set the state 
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
