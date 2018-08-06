import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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

const App = () => {
  return(
    <div className="App">
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  );
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
