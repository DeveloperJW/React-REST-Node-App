import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UpdateCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:JSON.parse(localStorage.getItem('user'))._id,
      authHeader:JSON.parse(localStorage.getItem('basicAuthHeader')),
      courseId: props.match.params.id,
      matchedCourse: {},
      title:"",
      description:"",
      materialsNeeded:"",
      estimatedTime:"",
      errors:"",
      ownerUserName:""
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
            title:response.data.title,
            description:response.data.description,
            materialsNeeded: response.data.materialsNeeded,
            estimatedTime:response.data.estimatedTime,
            ownerUserName:response.data.user.firstName+" "+response.data.user.lastName

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

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.put(`http://localhost:5000/api/courses/${this.state.courseId}`,{
      user:this.state.user,
      title:this.state.title,
      description:this.state.description,
      materialsNeeded: this.state.materialsNeeded,
      estimatedTime:this.state.estimatedTime
    },{
      auth:{
        username: JSON.parse(localStorage.getItem('user')).emailAddress,
        password: localStorage.getItem('password'),
      }
    })
        .then(response => {
          if (response.status===204){
            // redirect to the courses details page is status is 204
            this.props.history.goBack();
            // this.props.history.goBack();
          } else if (response.status === 500) {
            this.props.history.push('/error');
          }
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
          console.log(error.response.data.message);
          this.setState({errors:error.response.data.message});
        });
  };

// takes the _id parameter
  render() {
    const errorMessage = this.state.errors!==""?<div>
      <h2 className="validation--errors--label">
        Validation errors
      </h2>
      <div className="validation-errors">
        <ul>
          <li>{this.state.errors}</li>
        </ul>
      </div>
    </div>:"";
    return (
        <div className="bounds course--detail">
          <h1>Update Course</h1>
          <div>
              {errorMessage}
            <form onSubmit={this.handleSubmit}>
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  <input id="title" name="title" type="text"
                         className="input-title course--title--input"
                         onChange={this.handleChange}
                         value={this.state.title}/>
                  <p>By {this.state.ownerUserName}</p>
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