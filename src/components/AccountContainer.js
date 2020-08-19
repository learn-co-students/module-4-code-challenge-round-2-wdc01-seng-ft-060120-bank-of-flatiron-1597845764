import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const url = "http://localhost:6001/"
const urlApi = "http://localhost:6001/transactions"
class AccountContainer extends Component {
  constructor(){
    super()
    this.state = {
      transactions: [],
      transForForm: {}
    }
  }

  componentDidMount(){
    fetch(urlApi)
    .then(resp => resp.json())
    .then(transData => {
      this.setState({
        transactions: transData
      })
    })
  }

  handleDate = (e) => {
    this.setState({
      transForForm: {...this.state.transForForm, date: e.target.value}
    })
  }

  handleDescription = (e) => {
    this.setState({
      transForForm: {...this.state.transForForm, description: e.target.value}
    })
  }

  handleCategory = (e) =>{
    this.setState({
      transForForm: {...this.state.transForForm, category: e.target.value}
    })
  }

  handleIncome = (e) => {
    this.setState({
      transForForm: {...this.state.transForForm, amount: e.target.value}
    })
  }

  handleAddTrans = (e) => {
    e.preventDefault()
    let newTrans = this.state.transForForm
    
    fetch(urlApi,{
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(newTrans)
    })
    .then(resp => resp.json())
    .then(newTransDat => {
      this.setState({
        transactions: [...this.state.transactions, this.state.transForForm]
      })
    })
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm handleDate = {this.handleDate} 
          handleDescription = {this.handleDescription}
          handleCategory = {this.handleCategory}
          handleIncome = {this.handleIncome}
          handleAddTrans = {this.handleAddTrans}
        
        />
        <TransactionsList transactions = {this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
