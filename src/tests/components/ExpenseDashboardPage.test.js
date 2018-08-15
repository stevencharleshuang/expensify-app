import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import toJSON from 'enzyme-to-json'
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
