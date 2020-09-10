import React, { createContext, useReducer } from "react";
import AppReducer from "../context/AppReducer";
import axios from "axios";

// initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// create single context for the whole app
export const GlobalContext = createContext(initialState);

// provider component receiving components as children props because it has wrapped them in app.js
export const GlobalProvider = ({ children }) => {


  // Reducer Actions

  //get all the transactions from the Database
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");
      dispatch({
        type: "GET_TRANSACTIONS", //action type to pass on AppReducer.js
        payload: res.data.data, //passing data from API
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR", //action type to pass on AppReducer.js
        payload: err.response.data.error, //passing error to AppReducer.js
      });
    }
  }

  //delete a transaction from the Database
  async function deleteTransactions(id) {
    // id received as a parameter when the user deletes the transaction
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTIONS", //action type to pass on AppReducer.js
        payload: id, // passing data (payload) i.e id to AppReducer.js
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR", //action type to pass on AppReducer.js
        payload: err.response.data.error, //passing error to AppReducer.js
      });
    }
  }

  //add transactions to the Database
  async function addTransactions(transaction) {
    
    //pass the Header to perform the POST request
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      console.log(transaction);
      const res = await axios.post('/api/v1/transactions', transaction, config);

    // Whole transactions array received as a parameter when the transaction is added
    dispatch({
      type: "ADD_TRANSACTIONS", //action type to pass on AppReducer.js
      payload: res.data.data// passing data (payload) i.e transactions array to AppReducer.js
    });

    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR", //action type to pass o n AppReducer.js
        payload: err.response.data.error, //passing error to AppReducer.js
      });
    }
  }

  const [state, dispatch] = useReducer(AppReducer, initialState); // useReducer method needs a state and dispatch, dispatch comes from useReducer
  // useReducer receives AppReducer.js  and initialState as arguments

  return (
    // passing data down to the components
    <GlobalContext.Provider
      value={{
        transactions: state.transactions, //passing initial state to provider to pass it on to the components it has wrapped
        getTransactions, //passing down getTransactions function
        error: state.error, //passing down error from the global state (store)
        loading: state.loading, //passing down loading from the global state (store)
        deleteTransactions, //passing deleteTransactions function to provider to pass it on to the components it has wrapped
        addTransactions, //passing addTransactions function to provider to pass it on to the components it has wrapped
      }}
    >
      {children} {/*components in app.js*/}
    </GlobalContext.Provider>
  );
};
