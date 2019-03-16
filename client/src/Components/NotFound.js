import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Stateless functional component NotFound404 is created to handle URL mismatch
 * This component is different from NotFound.js which handles no corresponding search results
 */
const NotFound = () => {
  return (
      <div className="bounds">
        <ul>
          <li className='not-found'>
            <h1>Not Found</h1>
            <p>Sorry! We couldn't find the page you're looking for.</p>
            <NavLink to="/">Click here to go back to home page</NavLink>
          </li>
        </ul>
      </div>
  );
};

export default NotFound;