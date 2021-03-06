import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// the component shows on home page, render the list of courses from API server
class Courses extends Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/courses')
        .then(response => {
          if (response.status === 500) {
            this.props.history.push('/error');
          }
          this.setState({
            courses: response.data,
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
  }

  render() {
    return (
        <div className="bounds">
          {
            this.state.courses.map((course) => {
              return (
                  <div className="grid-33" key={course._id}>
                    <Link to={'/courses/' + course._id}
                          className="course--module course--link">
                      <h4 className="course--label">{course.label}</h4>
                      <h3 className="course--title">{course.title}</h3>
                    </Link>
                  </div>
              );
            })
          }
          <div className="grid-33">
            <Link to="/courses/create" className="course--module course--add--module">
              <h3 className="course--add--title">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px"
                     y="0px"
                     viewBox="0 0 13 13" className="add">
                  <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "/>
                </svg>
                New Course
              </h3>
            </Link>
          </div>
        </div>
    );
  }
}

export default Courses;