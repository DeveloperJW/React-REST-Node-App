import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Stateless functional component Forbidden is created to handle unexpected error
 */
const UnhandledError = () => {
  return (
      <div className="bounds">
        <h1>Error</h1>
        <p>Sorry! We just encountered an unexpected error.</p>
        <NavLink to="/">Click here to go back to home page</NavLink>
      </div>
  );
};

export default UnhandledError;