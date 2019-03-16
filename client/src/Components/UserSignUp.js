import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserSignUp extends Component {
  render() {
    return (
        <div className="bounds">
          <div className="grid-33 centered signin">
            <h1>Sign Up</h1>
            <div>
              <form>
                <div>
                  <input id="firstName" name="firstName" type="text"
                         className=""
                         placeholder="First Name" value=""/></div>
                <div><input id="lastName" name="lastName" type="text"
                            className=""
                            placeholder="Last Name" value=""/></div>
                <div><input id="emailAddress" name="emailAddress" type="text"
                            className="" placeholder="Email Address" value=""/>
                </div>
                <div><input id="password" name="password" type="password"
                            className=""
                            placeholder="Password" value=""/></div>
                <div><input id="confirmPassword" name="confirmPassword"
                            type="password" className=""
                            placeholder="Confirm Password"
                            value=""/></div>
                <div className="grid-100 pad-bottom">
                  <button className="button" type="submit">Sign Up</button>
                  <Link to="/">
                    <button className="button button-secondary">Cancel</button>
                  </Link>
                </div>
              </form>
            </div>
            <p>Already have a user account? <Link to="/signin">Click
              here</Link> to sign in!</p>
          </div>
        </div>
    );
  }
}

export default UserSignUp;