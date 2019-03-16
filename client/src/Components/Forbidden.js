import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Stateless functional component Forbidden is created to handle URL authentication
 */
const Forbidden = () => {
  return (
      <div className="bounds">
        <h1>Forbidden</h1>
        <p>Oh oh! You can't access this page.</p>
        <NavLink to="/">Click here to go back to home page</NavLink>
      </div>
  );
};

export default Forbidden;