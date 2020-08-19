import React, { Component } from "react";

class AddTransactionForm extends Component {

  handleInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={() => this.props.addTransaction(this.state)}>
          <div className="inline fields">
            <input type="date" name="date" onChange={(e) => this.handleInputs(e)} />
            <input type="text" name="description" placeholder="Description" onChange={(e) => this.handleInputs(e)} />
            <input type="text" name="category" placeholder="Category" onChange={(e) => this.handleInputs(e)} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={(e) => this.handleInputs(e)} 
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
