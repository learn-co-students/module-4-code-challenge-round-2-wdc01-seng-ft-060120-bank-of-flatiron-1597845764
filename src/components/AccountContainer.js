import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = "http://localhost:6001/transactions"

class AccountContainer extends Component {

  state = {
    transactions: []
  }



  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(transactionData => {
      this.setState({
        transactions: transactionData
      })
    })
  }

  CreateTransaction = () => {
    debugger
  }


  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions = { this.state.transactions }/>
      </div>
    );
  }
}

export default AccountContainer;
