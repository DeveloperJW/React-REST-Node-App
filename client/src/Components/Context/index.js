import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

const UserContext = React.createContext();

export class Provider extends Component {
  state = {
    users: [],
    matchedUser:{},
    password:"",
    isAuthenticated:false
  };

  // componentDidMount() {
  //   axios.get('http://localhost:5000/api/users', {
  //     auth: {
  //       username: '',
  //       password: '',
  //     },
  //   })
  //       .then(response => {
  //         this.setState({
  //           users: response.data,
  //         });
  //       })
  //       .catch(error => {
  //         console.log('Error fetching and parsing data', error);
  //       });
  // }

  signIn = (username, password) =>{
    // this.setState({username, password});
    axios.get('http://localhost:5000/api/users', {
      auth: {
        username: username,
        password: password,
      },
    })
        .then(response=> {
          const matchedUser = response.data.find((user)=>{
            return username === user.emailAddress;
          });
          this.setState({
            users: response.data,
            password: matchedUser.password,
            matchedUser:matchedUser,
            isAuthenticated:true
          });
          localStorage.setItem('user', JSON.stringify(matchedUser));
          localStorage.setItem('allUser',JSON.stringify(response.data));
          localStorage.setItem('basicAuthHeader',JSON.stringify(response.config.headers.Authorization));
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
  };
  // signUp(username, password){
  //   axios.post('http://localhost:5000/api/users')
  //       .then(response => {
  //         console.log(response.data);
  //         this.setState({
  //           users: response.data,
  //         })
  //         // localStorage.setItem('token', response.data._id);
  //       })
  //       .catch(error => {
  //         console.log('Error fetching and parsing data', error);
  //       });
  //
  // }


  signOut(){
    // localStorage.removeItem('token');
    localStorage.clear();
  }

  render() {
    return (
        <UserContext.Provider value={{
          isAuthenticated: this.state.isAuthenticated,
          actions:{
            signIn: this.signIn,
            signOut: this.signOut
          }
        }}>
          {this.props.children}
        </UserContext.Provider>
    );
  }
}

export const Consumer = UserContext.Consumer;
