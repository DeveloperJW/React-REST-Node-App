import React, { Component } from 'react';
import axios from 'axios';

const UserContext = React.createContext();

export class Provider extends Component {
  state = {
    users: [],
    matchedUser:JSON.parse(localStorage.getItem('user')),
    password:"",
    isAuth:localStorage.getItem('isAuth')
  };

  // componentDidMount() {
  //   if (localStorage.getItem('matchedUser')){
  //     this.setState({
  //       isAuth:true,
  //       matchedUser: JSON.parse(localStorage.getItem('user'))
  //     })
  //   }
  // }

  signIn = (username, password) => {
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
            password: password,
            matchedUser:matchedUser,
            isAuth:true
          });
          localStorage.setItem('user', JSON.stringify(matchedUser));
          localStorage.setItem('password',password);
          localStorage.setItem('allUser',JSON.stringify(response.data));
          localStorage.setItem('isAuth',this.state.isAuth);
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


  signOut=()=>{
    this.setState({
      users: [],
      matchedUser:{},
      password:"",
      isAuth:false
    });
    localStorage.clear();
  };

  render() {
    return (
        <UserContext.Provider value={{
          isAuth: this.state.isAuth,
          matchedUser:this.state.matchedUser,
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
