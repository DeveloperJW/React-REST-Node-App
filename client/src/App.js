import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
import { Provider } from './Components/Context';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //
  //   };
  // }

  render() {
    return (
        <Provider>
          <BrowserRouter>
            <div>
              <Header/>
              <Route path="/" exact component={Courses}/>
              <Route path='/signin' component={UserSignIn}/>
              <Route path='/signup' component={UserSignUp}/>
              <Route path='/courses/create' component={CreateCourse}/>
              <Route exact path="/courses/:id" component={CourseDetail}/>
              <Route exact path="/courses/:id/update" component={UpdateCourse}/>
              <Route path="/notfound" component={NotFound}/>
              <Route path="/forbidden" component={Forbidden}/>
              <Route path="/error" component={UnhandledError}/>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;