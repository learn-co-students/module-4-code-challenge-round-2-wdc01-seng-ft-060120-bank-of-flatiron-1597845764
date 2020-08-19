import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import Sort from "./Sort";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    displayedTransactions: [],
    sortBy: 'None'
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

  deleteTransaction = (transaction) => {

    fetch(`http://localhost:6001/transactions/${transaction.id}`,{
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(resp => resp.json())
    .then(() => {
      let remainingTransactions = this.state.displayedTransactions.filter( t => !(t === transaction))
      this.setState({
        transaction: remainingTransactions,
        displayedTransactions: remainingTransactions
      })
    })
  }

  changeSortBy = (sort) => {this.setState({ sortBy: sort})}

  sortInvoke = () => {
    let transactions = [...this.state.displayedTransactions]
    let sortBy = this.state.sortBy 

    if ( sortBy === 'Category') {
      transactions.sort((t1, t2) => t1.category.localeCompare(t2.category))
    } else if ( sortBy === 'Description') {
      transactions.sort((t1, t2) => t1.description.localeCompare(t2.description))
    }

    return transactions
  }


  render() {
    return (
      <div>
        <Search 
          changeSearch={this.changeSearch}
        />
        <br></br>
        <Sort
          changeSortBy={this.changeSortBy}
          sortBy={this.state.sortBy}
        />

        <AddTransactionForm 
          addTransaction={this.addTransaction}
        />
        <TransactionsList 
          transactions={this.sortInvoke()}
          deleteTransaction={this.deleteTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;
