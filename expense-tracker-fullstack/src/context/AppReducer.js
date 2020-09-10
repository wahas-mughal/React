export default (state, action) => { // receiving state and action from GlobalState.
  switch (action.type) { // takes actions based on action type

    // Get all the transactions from the Database
    case "GET_TRANSACTIONS" : 
    return {
      ...state,
      transactions: action.payload
    }

    case "DELETE_TRANSACTIONS":
      return {
        ...state, //spreading previous snapshot of the state
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload //filter the transactions, which don't match with the transaction id to be deleted.
        ),
      };

      case "ADD_TRANSACTIONS" : 
      return {
          ...state, //spreading previous snapshot of the state 
          transactions: [...state.transactions, action.payload] // Add new transactions on top of previous transactions
      }

      // get errors if something goes wrong
      case "TRANSACTION_ERROR": 
      return{
        ...state,
        error: action.type
      }

    default:
      return state; // by default return the state as it is
  }
};
