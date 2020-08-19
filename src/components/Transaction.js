import React from "react";

const Transaction = (props) => {
  let { transaction, deleteTransaction } = props

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td><button onClick={() => deleteTransaction(transaction)}>Delete Transaction</button></td>
    </tr>
  );
};

export default Transaction;
