import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from './Context';

class UserSignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: "",
      password: "",
      isAuth:false,
      user:{}
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(event);
  //   this.props.history.goBack();
  // };

  render() {
    // console.log(this.props.history);
    return (
        <Consumer>
          {({matchedUser,actions})=>{
            const handleSubmit = (e) =>{
              e.preventDefault();
              actions.signIn(this.state.emailAddress, this.state.password);
              this.props.history.goBack();
            };
        return(
            <div className="bounds">
              <div className="grid-33 centered signin">
                <h1>Sign In</h1>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div><input id="emailAddress" name="emailAddress" type="text"
                                className="" placeholder="Email Address"
                                value={this.state.email}
                                onChange={this.handleChange}
                    />
                    </div>
                    <div>
                      <input id="password" name="password" type="password"
                             className="" placeholder="Password"
                             value={this.state.password}
                             onChange={this.handleChange}
                      />
                    </div>
                    <div className="grid-100 pad-bottom">
                      <button className="button" type="submit">Sign In</button>
                      <Link to="/">
                        <button className="button button-secondary">Cancel</button>
                      </Link>
                    </div>
                  </form>
                </div>
                <p>&nbsp;</p>
                <p>Don't have a user account?
                  <Link to="/signup">Click here</Link> to sign up!</p>
              </div>
            </div>
          );
        }}
        </Consumer>
    );
  }
}

export default UserSignIn;