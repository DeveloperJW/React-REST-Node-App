import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ReactMarkdown = require('react-markdown');

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: props.match.params.id,
      matchedCourse: {},
      errors: '',
      currentUser: localStorage.getItem('user'),
      ownerUserId: '',
      ownerUserName: '',
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/courses/${this.state.courseId}`)
        .then(response => {
          if (response.status === 500) {
            this.props.history.push('/error');
          }
          this.setState({
            matchedCourse: response.data,
            ownerUserName: response.data.user.firstName + ' ' + response.data.user.lastName,
            ownerUserId: response.data.user._id,
          });
        })
        .catch(error => {
          // console.log('Error fetching and parsing data', error);
          if (error.response.status === 404){
            this.props.history.push('/notfound');
          } else if(error.response.status === 500){
            this.props.history.push('/error');
          }
        });
  }

// takes the _id parameter
  render() {
    const currentUserId = this.state.currentUser===null?"":JSON.parse(this.state.currentUser)._id;
    const navButton = (currentUserId !== '' &&
        this.state.ownerUserId === currentUserId)
        ? <span>
          <Link to={this.props.location.pathname + '/update'}>
            <button className="button">Update Course</button>
          </Link>
          <Link to="/courses/delete"><button className="button">Delete Course</button></Link></span>
        : "";
    return (
        <React.Fragment>
          <div className="actions--bar">
            <div className="bounds">
              <div className="grid-100">
                       {navButton}
                <Link to="/">
                  <button className="button button-secondary">Return to List
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bounds course--detail">
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <h3 className="course--title">{this.state.matchedCourse.title}</h3>
                <p>By {this.state.ownerUserName}</p>
              </div>
              <div className="course--description">
                <ReactMarkdown source={this.state.matchedCourse.description}/>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <h3>{this.state.matchedCourse.estimatedTime}</h3>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <ReactMarkdown
                        source={this.state.matchedCourse.materialsNeeded}/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
    );

  }

}

export default CourseDetail;