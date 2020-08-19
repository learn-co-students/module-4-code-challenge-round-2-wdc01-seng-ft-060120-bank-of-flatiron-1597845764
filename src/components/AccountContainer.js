import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    displayedTransactions: [],
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data => this.setState({
      transactions: data,
      displayedTransactions: data
    }))
  }

  addTransaction = (transactionData) => {
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        date: transactionData.date, 
        description: transactionData.description, 
        category: transactionData.category, 
        amount: transactionData.amount
      })
    })
    .then(resp => resp.json())
    .then(newTransaction => this.setState({
      transactions: [...this.state.transactions, newTransaction]
    }))
  }

  changeSearch = (term) => {
    let filteredTransaction = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(term.toLowerCase()))

    this.setState({
      displayedTransactions: filteredTransaction
    })
  }


  render() {
    return (
      <div>
        <Search 
          changeSearch={this.changeSearch}
        />
        <AddTransactionForm 
          addTransaction={this.addTransaction}
        />
        <TransactionsList 
          transactions={this.state.displayedTransactions}
        />
      </div>
    );
  }
}

export default AccountContainer;
