import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';

const App = () => {
  return(
    <div className="App">
      <AppRouter />
    </div>
  );
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
