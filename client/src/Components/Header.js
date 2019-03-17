import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
      <div className="header">
        <div className="bounds">
          <Link to="/">
            <h1 className="header--logo">Courses</h1>
          </Link>
          <nav>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </nav>
        </div>
      </div>
  );
};

export default Header;

// renderLinks();
// {
//   // const user = localStorage.getItem('user');
//   //     // if (this.props.authenticated && this.props.userInfo) {
//   //     //   console.log(this.props);
//   //     //   const fullName = this.props.userInfo.firstName + ' ' +
//   //     //       this.props.userInfo.lastName;
//   //   return (
//   //       // might need to use NavLink to make selected link active
//   //       // NavLink exact to
//   //       <nav>
//   //         <span>Welcome user!</span>
//   //         <Link to="/signout">Sign Out</Link>
//   //         <Link to="/feature">Feature</Link>
//   //       </nav>
//   //   );
//   // } else {
//     return (
//         <nav>
//           <Link to="/signup">Sign Up</Link>
//           <Link to="/signin">Sign In</Link>
//         </nav>
//     );
//   }