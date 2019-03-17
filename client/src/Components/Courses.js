import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CourseConsumer } from './Context';
import axios from 'axios';

class Courses extends Component {
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

    return this.state.courses.map((course) => {
      return (
          <div className="grid-33" key={course._id}>
            <Link to={'/courses/' + course._id}
                  className="course--module course--link">
              <h4 className="course--label">{course.label}</h4>
              <h3 className="course--title">{course.title}</h3>
            </Link>
          </div>
      );
    });
  }
}

export default Courses;