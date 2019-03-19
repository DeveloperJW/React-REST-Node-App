import React, { Component } from 'react';
import axios from 'axios';

// Create Context
const UserContext = React.createContext();

// The provider is used to store user authentication information
export class Provider extends Component {
  state = {
    users: [],
    matchedUser: JSON.parse(localStorage.getItem('user')),
    password: '',
    isAuth: localStorage.getItem('isAuth'),
  };

  // define signIn method which takes two parameters and make API request to local Node.js server
  signIn = (username, password) => {
    // this.setState({username, password});
    axios.get('http://localhost:5000/api/users', {
      auth: {
        username: username,
        password: password,
      },
    })
        .then(response => {
          // if status code is 500 when posting to API server, redirect to error page
          if (response.status === 500) {
            this.props.history.push('/error');
          }
          // find the matched user from the list of users we received from response
          // when I was started on Project 9, the get request returns the list of all users
          const matchedUser = response.data.find((user) => {
            return username === user.emailAddress;
          });
          this.setState({
            users: response.data,
            password: password,
            matchedUser: matchedUser,
            isAuth: true,
          });
          localStorage.setItem('user', JSON.stringify(matchedUser));
          localStorage.setItem('password', password);
          localStorage.setItem('allUser', JSON.stringify(response.data));
          localStorage.setItem('isAuth', this.state.isAuth);
          localStorage.setItem('basicAuthHeader',
              JSON.stringify(response.config.headers.Authorization));
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
  };

  signOut = () => {
    this.setState({
      users: [],
      matchedUser: {},
      password: '',
      isAuth: false,
    });
    localStorage.clear();
  };

  render() {
    return (
        <UserContext.Provider value={{
          isAuth: this.state.isAuth,
          matchedUser: this.state.matchedUser,
          actions: {
            signIn: this.signIn,
            signOut: this.signOut,
          },
        }}>
          {this.props.children}
        </UserContext.Provider>
    );
  }
}

export const Consumer = UserContext.Consumer;
