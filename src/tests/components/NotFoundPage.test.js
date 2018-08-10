import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';
import toJSON from 'enzyme-to-json'
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
