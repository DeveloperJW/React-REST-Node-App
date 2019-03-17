import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CourseConsumer } from './Context';

const ReactMarkdown = require('react-markdown');

class UpdateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: props.match.params.id,
    };
  }

// takes the _id parameter
  render() {

    return (
        <CourseConsumer>
          {({courses})=>{
            const matchedPlayer = courses.find((course)=>{
              return this.state.courseId === course._id;
            });
            return(
                <React.Fragment>
                  <div className="actions--bar">
                    <div className="bounds">
                      <div className="grid-100">
                        <span>
                          <Link to="/courses/update"><button className="button">Update Course</button></Link>
                          <Link to="/courses/delete"><button className="button">Delete Course</button></Link>
                        </span>
                        <Link to="/">
                          <button className="button button-secondary">Return to List</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="bounds course--detail">
                    <div className="grid-66">
                      <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <h3 className="course--title">{matchedPlayer.title}</h3>
                        <p>By Joe Smith</p>
                      </div>
                      <div className="course--description">
                        <ReactMarkdown source={matchedPlayer.description}/>
                      </div>
                    </div>
                    <div className="grid-25 grid-right">
                      <div className="course--stats">
                        <ul className="course--stats--list">
                          <li className="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <h3>{matchedPlayer.estimatedTime}</h3>
                          </li>
                          <li className="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <ReactMarkdown source={matchedPlayer.materialsNeeded}/>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
            );
          }}
        </CourseConsumer>

    );
  }

}

export default UpdateCourse;