import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Consumer } from './Context';

class UserSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      errors: '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    const errorMessage = this.state.errors !== '' ? <div>
      <h2 className="validation--errors--label">
        Validation errors
      </h2>
      <div className="validation-errors">
        <ul>
          <li>{this.state.errors}</li>
        </ul>
      </div>
    </div> : '';
    return (
        // need to add Consumer here, because we neeed to call the signin method
        // after the user sign up
        <Consumer>
          {({ matchedUser, actions }) => {
            const handleSubmit = (e) => {
              e.preventDefault();
              const newUser = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                emailAddress: this.state.emailAddress,
                password: this.state.password,
              };
              // post the signup form into rest api
              axios.post('http://localhost:5000/api/users', newUser)
                  .then(response => {
                    if (response.status === 500) {
                      this.props.history.push('/error');
                    }
                    if (response.status === 201) {
                      // if the status is 201, meaning the form is valid and record added into DB
                      // then call the signin method and sign in the user
                      actions.signIn(this.state.emailAddress, this.state.password);
                      this.props.history.goBack();
                    }
                  })
                  .catch(error => {
                    // console.log(error.response.data);
                    this.setState({ errors: error.response.data.message });
                  });
            };
            return (
                <div className="bounds">
                  <div className="grid-33 centered signin">
                    <h1>Sign Up</h1>
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div>
                          {errorMessage}
                          <input id="firstName" name="firstName" type="text"
                                 className="" placeholder="First Name"
                                 value={this.state.firstName}
                                 onChange={this.handleChange}
                          />
                        </div>
                        <div><input id="lastName" name="lastName" type="text"
                                    className=""
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                        /></div>
                        <div><input id="emailAddress" name="emailAddress"
                                    type="text"
                                    className="" placeholder="Email Address"
                                    value={this.state.emailAddress}
                                    onChange={this.handleChange}
                        />
                        </div>
                        <div><input id="password" name="password"
                                    type="password"
                                    className=""
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                        />
                        </div>
                        <div><input id="confirmPassword" name="confirmPassword"
                                    type="password" className=""
                                    placeholder="Confirm Password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                        /></div>
                        <div className="grid-100 pad-bottom">
                          <button className="button" type="submit">Sign Up
                          </button>
                          <Link to="/">
                            <button className="button button-secondary">Cancel
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                    <p>Already have a user account? <Link to="/signin">Click
                      here</Link> to sign in!</p>
                  </div>
                </div>
            );
          }}
        </Consumer>
    );
  }
}

export default UserSignUp;