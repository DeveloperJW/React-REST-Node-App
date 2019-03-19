import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
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
import UserSignOut from './Components/UserSignOut';
import PrivateRoute from './Components/PrivateRoute';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route path="/" exact component={Courses}/>
              <Route path='/signin' component={UserSignIn}/>
              <Route path='/signup' component={UserSignUp}/>
              <Route path='/signout' component={UserSignOut}/>
              <PrivateRoute path='/courses/create' component={CreateCourse}/>
              <Route path="/courses/:id" exact component={CourseDetail}/>
              <PrivateRoute path="/courses/:id/update" component={UpdateCourse}/>
              <Route path="/notfound" component={NotFound}/>
              <Route path="/forbidden" component={Forbidden}/>
              <Route path="/error" component={UnhandledError}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;