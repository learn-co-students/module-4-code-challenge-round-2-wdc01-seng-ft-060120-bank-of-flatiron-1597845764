import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const url = `http://localhost:3000/transactions`;

class AccountContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       transactions: [],
       displayTransactions: []
    }
  }

  componentDidMount() {
    fetch(url)
    .then(resp => resp.json())
    .then(bankData => this.setState({
      transactions: bankData,
      displayTransactions: bankData
    }))
  }

  handleForm = (transaction) => {
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(transaction)
    })
    .then(resp => resp.json())
    .then(newTransaction => {
      this.setState({
        transactions: [...this.state.transactions, newTransaction],
        displayTransactions: [...this.state.displayTransactions, newTransaction]
      })
    })
  }

  handleSearch = (query) => {
    let filteredList = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(query.toLowerCase()))

    this.setState({
      displayTransactions: filteredList
    })
  }


  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm handleForm={this.handleForm}/>
        <TransactionsList displayTransactions={this.state.displayTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
