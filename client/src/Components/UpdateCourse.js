import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UpdateCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseId: props.match.params.id,
      matchedCourse: {},
      title:"",
      description:"",
      materialsNeeded:"",
      estimatedTime:""
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/courses/${this.state.courseId}`)
        .then(response => {
          this.setState({
            matchedCourse: response.data,
            title:response.data.title,
            description:response.data.description,
            materialsNeeded: response.data.materialsNeeded,
            estimatedTime:response.data.estimatedTime

          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

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
                  <h3 className="course--title" onChange={this.handleChange}>
                    {this.state.title}
                  </h3>
                  <p>By Joe Smith</p>
                </div>
                <div className="course--description">
                <textarea id="description" name="description"
                          onChange={this.handleChange}
                          value={this.state.description}
                          placeholder="Course description..."/>
                </div>
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      <div>
                        <input id="estimatedTime" name="estimatedTime"
                               onChange={this.handleChange}
                               type="text" className="course--time--input"
                               placeholder="Hours" value={this.state.estimatedTime}/>
                      </div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      <div>
                      <textarea id="materialsNeeded" name="materialsNeeded"
                                onChange={this.handleChange}
                                value={this.state.materialsNeeded}
                                className="" placeholder="List materials..."/>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid-100 pad-bottom">
                <button className="button" type="submit" onSubmit={this.handleSubmit}>
                  Update Course
                </button>
                <Link to={this.props.location.pathname.slice(0,-7)}>
                <button className="button button-secondary">
                  Cancel
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>

    );
  }

}

export default UpdateCourse;