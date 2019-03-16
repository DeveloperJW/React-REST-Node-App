import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="bounds course--detail">
          <h1>Update Course</h1>
          <div>
            <form>
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  <h3 className="course--title">Build a Basic Bookcase</h3>
                  <p>By Joe Smith</p>
                </div>
                <div className="course--description">
                <textarea id="description" name="description"
                          placeholder="Course description...">

                </textarea>
                </div>
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      <div>
                        <input id="estimatedTime" name="estimatedTime"
                               type="text" className="course--time--input"
                               placeholder="Hours" value="16 hours"/>
                      </div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      <div>
                      <textarea id="materialsNeeded" name="materialsNeeded"
                                className="" placeholder="List materials...">
                    </textarea>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid-100 pad-bottom">
                <button className="button" type="submit">Update Course</button>
                <button className="button button-secondary"
                        onClick="event.preventDefault(); location.href='course-detail.html';">Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

    );
  }

}

export default UpdateCourse;