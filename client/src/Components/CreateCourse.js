import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:JSON.parse(localStorage.getItem('user'))._id,
      title: '',
      description: '',
      estimatedTime: '',
      materialsNeeded: '',
      errors:''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/courses',{
      user:this.state.user,
      title:this.state.title,
      description:this.state.description,
      materialsNeeded: this.state.materialsNeeded,
      estimatedTime:this.state.estimatedTime
    } ,{
      auth: {
        username: JSON.parse(localStorage.getItem('user')).emailAddress,
        password: localStorage.getItem('password'),
      },
    })
        .then(response=> {
          // this.setState({
          //
          // });
          if (response.status===201){
            console.log("Course created.");
            this.props.history.goBack();
          } else{
            console.log("Error on creating the course");
          }

        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
          this.setState({errors:error.response.data.message});
        });
  };

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
          <h1>Create Course</h1>
          <div>
            {errorMessage}
            <form onSubmit={this.handleSubmit}>
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  <div><input id="title" name="title" type="text"
                              className="input-title course--title--input"
                              placeholder="Course title..."
                              onChange={this.handleChange}
                              value={this.state.title}/></div>
                  <p>By Joe Smith</p>
                </div>
                <div className="course--description">
                  <div><textarea id="description" name="description"
                                 className=""
                                 placeholder="Course description..."
                                 value={this.state.description}
                                 onChange={this.handleChange}
                  />
                  </div>
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
                               placeholder="Hours"
                               value={this.state.estimatedTime}
                               onChange={this.handleChange}
                        />
                      </div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      <div><textarea id="materialsNeeded" name="materialsNeeded"
                                     className=""
                                     placeholder="List materials..."
                                     value={this.state.materialsNeeded}
                                     onChange={this.handleChange}
                      />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid-100 pad-bottom">
                <button className="button" type="submit">Create Course</button>
                <Link to="/">
                  <button className="button button-secondary">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default CreateCourse;