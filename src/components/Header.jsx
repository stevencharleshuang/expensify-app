import React from 'react';
import { NavLink } from 'react-router-dom';

// Alternate ES6 Stateless Functional Component Syntax
const Header = () => (
  <header>
    <h1>Expensify App</h1>
    <NavLink to="/" activeClassName="is-active" exact> Dashboard </NavLink>
    <NavLink to="/create" activeClassName="is-active"> Create Expense </NavLink>
    <NavLink to="/help" activeClassName="is-active"> Help </NavLink>
  </header>
);

export default Header
