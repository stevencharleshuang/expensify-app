import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const App = () => {
  return(
    <div className="App">
      Hello, Dave
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
