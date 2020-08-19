import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Transaction from "./Transaction";

const url = 'http://localhost:6001'
const transactionurl = `${url}/transactions`

class AccountContainer extends Component {
  
      state = {
      transactions: [],
      transaction: {
        date: null,
        description: "",
        category: "",
        amount: "",
      }
    }
  

    componentDidMount(){
      fetch(transactionurl)
      .then( res => res.json() )
      .then( transactions => this.setState({
        transactions: transactions
      }))
    }

    

    handleAdd = (e) => {
      e.preventDefault()
      fetch(`${transactionurl}/${this.state.id}`, {
        method: "POST",
        body: JSON.stringify({
          date: this.state.date,
          description: this.state.description,
          category: this.state.category,
          amount: this.state.amount,
          id: this.state.id
        })
      } )
      .then( res => res.json() )
      .then( data => this.setState({
        transactions: this.state.transactions.map( (transaction) => {
          if (transaction.id === data.id) {
            return data 
          }
          return transaction
        })
      }))
    
     }
    

  render() {
    return (
      <div>
        <Search />

        <AddTransactionForm 
          date={this.state.date}
          description={this.state.description}
          category={this.state.category}
          amount={this.state.amount}
          handleAdd={this.handleAdd}

        />
        <TransactionsList 
        transactions={this.state.transactions}
        />
      </div>
    );
  }
}

export default AccountContainer;
