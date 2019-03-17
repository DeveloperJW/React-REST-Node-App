import React, { Component } from 'react';
import axios from 'axios';

const UserContext = React.createContext();
const CourseContext = React.createContext();

export class Provider extends Component{
  state={
    courses:[]
  };

  componentDidMount() {
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
    return(
        <CourseContext.Provider value ={{
          courses: this.state.courses,
        }}>
          {this.props.children}
        </CourseContext.Provider>
    );
  }
}

export const CourseConsumer = CourseContext.Consumer;
