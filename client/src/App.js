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

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: [],
  //     matchedUser:{},
  //     password:"",
  //     isAuthenticated:false
  //   };
  // }

  // componentDidMount() {
  //   if (localStorage.getItem('user')){
  //     this.setState({
  //       isAuthenticated:true,
  //       matchedUser :JSON.parse(localStorage.getItem('user')),
  //     })
  //   }
  // }

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
              <Route path='/courses/create' component={CreateCourse}/>
              <Route path="/courses/:id" exact component={CourseDetail}/>
              <Route path="/courses/:id/update" component={UpdateCourse}/>
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