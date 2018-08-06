import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardPage = () => (
  <div>
    This is from Dashboard Compy
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from Add Expense Compy
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from Edit Expense Compy
  </div>
);

const HelpPage = () => (
  <div>
    This is from Help Compy
  </div>
);

const NotFoundPage = () => (
  <div>
    404!
    <br /><br />
    <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact> Dashboard </NavLink>
    <NavLink to="/create" activeClassName="is-active"> Create Expense </NavLink>
    <NavLink to="/edit" activeClassName="is-active"> Edit Expense </NavLink>
    <NavLink to="/help" activeClassName="is-active"> Help </NavLink>
  </header>
);

const App = () => {
  return(
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
