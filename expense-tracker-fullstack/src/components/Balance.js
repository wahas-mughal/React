import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import {numberWithCommas} from '../utils/format';

function Balance() {

  const { transactions } = useContext(GlobalContext); // destructure (get) the transactions from GlobalContext by useContext hook
  const amounts = transactions.map(transaction => transaction.amount); // maps the transaction amounts
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); // it reduces the transaction amounts in the array to a single array element
                                                                            //acc = total elements in the array
                                                                            //item = next element to be reduce
                                                                            // i.e transactions[340,20,30] = transaction[390]
                                                                            // transactions[340,-20,30] = transaction[370]
    
  return (
    <div className="">
      <h4>Your Balance</h4>
      <h1 id="balance">${numberWithCommas(total) }</h1> {/*return the reduced amount i.e. total balance*/}
    </div>
  );
}

export default Balance;
