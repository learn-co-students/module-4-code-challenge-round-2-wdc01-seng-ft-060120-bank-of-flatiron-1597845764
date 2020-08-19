import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange = {(e) => this.props.handleDate(e)} />
            <input type="text" name="description" placeholder="Description" onChange = {(e) => this.props.handleDescription(e)} />
            <input type="text" name="category" placeholder="Category" onChange = {(e) => this.props.handleCategory(e)} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange = {(e) => this.props.handleIncome(e)}
            />
          </div>
          <button className="ui button" type="submit" onClick = {(e) => this.props.handleAddTrans(e)}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
