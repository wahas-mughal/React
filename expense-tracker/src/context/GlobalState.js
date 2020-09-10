import React, { createContext, useReducer } from "react";
import AppReducer from "../context/AppReducer";

// initial state
const initialState = {
  transactions: [],
};

// create single context for the whole app
export const GlobalContext = createContext(initialState);


// provider component receiving components as children props because it has wrapped them in app.js
export const GlobalProvider = ({ children }) => {

  
// Reducer Actions

//delete transactions
function deleteTransactions(id){ // id received as a parameter when the user deletes the transaction
  dispatch({
    type: 'DELETE_TRANSACTIONS', //action type to pass on AppReducer.js
    payload: id // passing data (payload) i.e id to AppReducer.js
  })
}

//add transactions

function addTransactions(transactions){ // Whole transactions array received as a parameter when the adds the transaction
  dispatch({
    type: 'ADD_TRANSACTIONS', //action type to pass on AppReducer.js
    payload: transactions // passing data (payload) i.e transactions array to AppReducer.js
  })
}


  const [state, dispatch] = useReducer(AppReducer, initialState); // useReducer method needs a state and dispatch, dispatch comes from useReducer
                                                                  // useReducer receives AppReducer.js  and initialState as arguments

  return (
    // passing data down to the components
    <GlobalContext.Provider
      value={{
        transactions: state.transactions, //passing initial state to provider to pass it on to the components it has wrapped
        deleteTransactions, //passing deleteTransactions function to provider to pass it on to the components it has wrapped
        addTransactions //passing addTransactions function to provider to pass it on to the components it has wrapped
      }}
    >
      {children} {/*components in app.js*/}
    </GlobalContext.Provider>
  );
};