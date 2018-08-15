import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import toJSON from 'enzyme-to-json'
import ReactShallowRenderer from 'react-test-renderer/shallow';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() }
  wrapper = shallow(
    <AddExpensePage
      addExpense={addExpense}
      history={history}
    />
  );
});

test('should render AddExpensePage with expenses', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle addExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
