import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill' }));
store.dispatch(addExpense({ description: 'Gas Bill' }));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const App = () => {
  return(
    <div className="App">
      <AppRouter />
    </div>
  );
}

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('app'));
