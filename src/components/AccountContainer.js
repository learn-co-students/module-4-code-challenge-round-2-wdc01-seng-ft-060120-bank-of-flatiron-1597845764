import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = "http://localhost:6001/transactions"

class AccountContainer extends Component {

  state = {
    transactions: [],
    date: 0,
    description: "",
    category: "",
    amount: 0
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

  createTransaction = (e) => {
    e.preventDefault()
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
    .then(res => res.json())
    .then(transaction => console.log())
  }

  handleDate = (date) => {
    let newDate = date.target.value
    console.log(newDate)
      this.setState({
        date: newDate
      })
  }

  handleDescription = (description) => {
    let newDescription = description.target.value
    console.log(newDescription)
      this.setState({
        description: newDescription
      })
  }

  handleCategory = (category) => {
    let newCategory = category.target.value
    console.log(newCategory)
      this.setState({
        category: newCategory
      })
  }

  handleAmount = (amount) => {
    let newAmount = amount.target.value
    console.log(newAmount)
      this.setState({
        amount: newAmount
      })
  }



  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm createTransaction = { this.createTransaction } handleDate = { this.handleDate} handleDescription = { this.handleDescription} handleCategory={this.handleCategory} handleAmount={this.handleAmount}/>
        <TransactionsList transactions = { this.state.transactions }/>
      </div>
    );
  }
}

export default AccountContainer;
