import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import toJSON from 'enzyme-to-json'
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render AddExpensePage with expenses', () => {
  const wrapper = shallow(<AddExpensePage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
