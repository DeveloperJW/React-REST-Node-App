import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    const user = localStorage.getItem('user');
    if (this.props.authenticated && this.props.userInfo) {
      console.log(this.props);
      const fullName = this.props.userInfo.firstName + ' ' +
          this.props.userInfo.lastName;
      return (
          // might need to use NavLink to make selected link active
          // NavLink exact to
          <nav>
            <span>Welcome {fullName}!</span>
            <Link to="/signout">Sign Out</Link>
            <Link to="/feature">Feature</Link>
          </nav>
      );
    } else {
      return (
          <nav>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </nav>
      );
    }
  }

  render() {
    return (
        <div className="header">
          <div className="bounds">
            <Link to="/">
              <h1 className="header--logo">Courses</h1>
            </Link>
            {this.renderLinks()}
          </div>
        </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { authenticated: state.auth.authenticated, userInfo: state.auth.userInfo};
// }

export default Header;