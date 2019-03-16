import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Courses from './Components/Courses';
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';
import CourseDetail from './Components/CourseDetail';
import CreateCourse from './Components/CreateCourse';
import UpdateCourse from './Components/UpdateCourse';
import NotFound from './Components/NotFound';
import Forbidden from './Components/Forbidden';
import UnhandledError from './Components/UnhandledError';

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
        .then(response => {
          this.setState({
            courses: response.data,
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
  }

  render() {
    // console.log(this.state.courses);

    const myCoursePage = (props) => {
      return (
          <Courses courses={this.state.courses}/>
      );
    };
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" render={myCoursePage}/>
            <Route path='/signin' component={UserSignIn}/>
            <Route path='/signup' component={UserSignUp}/>
            <Route path='/courses/create' component={CreateCourse}/>
            <Route exact path="/courses/:id" component={CourseDetail}/>
            <Route path="/courses/:id/update" component={UpdateCourse}/>
            <Route path="/notfound" component={NotFound}/>
            <Route path="/forbidden" component={Forbidden}/>
            <Route path="/error" component={UnhandledError}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;