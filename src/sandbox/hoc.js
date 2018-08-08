// Higher Order Components: a component that renders another component
// Reuses code
// Render hijacking
// Prop manipulation
// Abstract state
//
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Info: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  // This is the HOC
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
  // Return the HOC
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in</p>}
    </div>
  );
}

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="some information from props" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="some information from props" />, document.getElementById('app'));
