import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Courses from './Components/Courses';
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    //lifecycle methods
    // fetch('http://localhost:5000/api/courses')
    //     .then(response => response.json())
    //     .then(responseData => {
    //       this.setState({ courses: responseData });
    //     })
    //     .catch(error => console.log('Error fetching data'));
    axios.get('http://localhost:5000/api/courses')
        .then(response =>{
          this.setState({
            courses: response.data
          });
        })
        .catch(error =>{
          console.log('Error fetching and parsing data', error);
        });
  }

  render() {
    // console.log(this.state.courses);

    const myCoursePage = (props) =>{
      return(
          <Courses courses = {this.state.courses}/>
      );
    };
    return (
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" render={myCoursePage}/>
            <Route exact path='/signin' component={UserSignIn}/>
            <Route path='/signup' component={UserSignUp}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;