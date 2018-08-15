import React from 'react';
import { connect } from 'react-redux';
import { removeExpense, editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (expense) => {
    this.props.dispatch(editExpense(this.props.expense.id, expense));
    this.props.history.push('/');
  }

  onClick = () => {
    this.props.dispatch(removeExpense({ id: this.props.expense.id }));
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <br />
        <button onClick={this.onClick}>
          Remove
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
  };
};


export default connect(mapStateToProps)(EditExpensePage);
