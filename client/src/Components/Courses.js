import React, { Component } from 'react';
import {Consumer} from './Context';
import { Link } from 'react-router-dom';

class Courses extends Component {
  renderList() {
    return this.props.courses.map((course) => {
      return (
          <div className="grid-33" key={course._id}>
            <Link to={'/courses/' + course._id} className="course--module course--link">
                <h4 className="course--label">{course.label}</h4>
                <h3 className="course--title">{course.title}</h3>
            </Link>
          </div>
      );
    });
  }

  render() {
    return (
        <ul>
          {this.renderList()}
        </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of Courses
  return {
    courses: state.courses,
  };
}

export default Courses;