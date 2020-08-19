import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input onChange={(e) => this.props.handleDate(e.target)} type="date" name="date" />
            <input onChange={(e) => this.props.handleDescription(e.target)} type="text" name="description" placeholder="Description" />
            <input onChange={(e) => this.props.handleCategory(e.target)} type="text" name="category" placeholder="Category" />
            <input onChange ={(e) => this.props.handleAmount(e.target)}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button onClick={(e) => this.props.addNewTransaction(e)} className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
