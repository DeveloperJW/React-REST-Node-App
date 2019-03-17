import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CourseConsumer } from './Context';

class Courses extends Component {

  render() {
    return (
          <CourseConsumer>
            {({ courses }) => {
              return courses.map((course) => {
                return (
                    <div className="grid-33" key={course._id}>
                      <Link to={'/courses/' + course._id} className="course--module course--link">
                        <h4 className="course--label">{course.label}</h4>
                        <h3 className="course--title">{course.title}</h3>
                      </Link>
                    </div>
                );
              });
            }}
          </CourseConsumer>
    );
  }
}

export default Courses;