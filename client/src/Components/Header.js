import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from './Context';

const Header = () => {
  return (
      <Consumer>{({ matchedUser, isAuth }) =>
            <div className="header">
              <div className="bounds">
                <Link to="/">
                  <h1 className="header--logo">Courses</h1>
                </Link>
                {isAuth ?<nav><span>Welcome {matchedUser.firstName} {matchedUser.lastName}!</span><Link to="/signout">Sign Out</Link></nav>
                    :<nav> <Link to="/signup">Sign Up</Link> <Link to="/signin">Sign In</Link> </nav>}
              </div>
            </div>
      }
      </Consumer>
  );
};

export default Header;