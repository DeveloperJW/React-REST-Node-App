import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  let headerLinks = '';
  if (currentUser === null) {
    headerLinks = <nav>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </nav>;
  } else {
    headerLinks = <nav>
      <span>Welcome {currentUser.firstName + ' ' + currentUser.lastName}</span>
      <Link to="/signout">Sign Out</Link>
    </nav>;
  }

  return (
      <div className="header">
        <div className="bounds">
          <Link to="/">
            <h1 className="header--logo">Courses</h1>
          </Link>
          {headerLinks}
        </div>
      </div>
  );
};

export default Header;