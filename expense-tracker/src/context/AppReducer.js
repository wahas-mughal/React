export default (state, action) => { // receiving state and action from GlobalState.
  switch (action.type) { // takes actions based on action type
    case "DELETE_TRANSACTIONS":
      return {
        ...state, //spreading previous snapshot of the state
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload //filter the transactions, which don't match with the transaction id to be deleted.
        ),
      };

      case "ADD_TRANSACTIONS" : 
      return {
          ...state, //spreading previous snapshot of the state 
          transactions: [action.payload, ...state.transactions] // Add new transactions on top of previous transactions
      }
    default:
      return state; // by default return the state as it is
  }
};
