import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const url = "http://localhost:6001/transactions"

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
    .then( res => res.json() )
    .then( transactions => this.setState({
      transactions: transactions,
      displayTransactions: transactions
    }))
  }

  handleDate = (e) => {
    this.setState({
      date: e.value
    })
  }

  handleDescription = (e) => {
   this.setState({
     description: e.value
   })
  }

  handleCategory = (e) => {
    
    this.setState({
      category: e.value
    })
  }

  handleAmount = (e) => {
    
    this.setState({
      amount: e.value
    })
  }

  addNewTransaction = (e) => {
  e.preventDefault()
    fetch( url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    } )
    .then( res => res.json() )
    .then( newTransaction => this.setState({
      displayTransactions: [ newTransaction,...this.state.displayTransactions]
    })
    )
  }

  searchTransaction = (term) => {
     let filteredTransactions = this.state.transactions.filter( transaction =>  transaction.description.toLowerCase().includes(term.toLowerCase()))
     this.setState({
       displayTransactions: filteredTransactions
     })


  }
   
 
    
  
  
  render() {
    return (
      <div>
        <Search searchTransaction={this.searchTransaction}/>
        <AddTransactionForm 
        addNewTransaction={this.addNewTransaction}
        handleDate={this.handleDate}
        handleDescription={this.handleDescription}
        handleCategory={this.handleCategory}
        handleAmount={this.handleAmount}
        />
        <TransactionsList transactions={this.state.displayTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
