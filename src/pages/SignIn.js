import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    else {
      return (
        <section className="container">
          <div className="headerContact">
            <h2 className="">Sign In</h2>
          </div>
          <form className="white" onSubmit={this.handleSubmit}>
            <div className="social-buttons">
              <div className="group">
                <a
                  title="Sign in with facebook"
                  className="btn btn-primary btn-block a1"
                  href="https://fr-fr.facebook.com/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook" />
                </a>
              </div>
              <div className="group">
                <a
                  title="Sign in with twitter"
                  className="btn btn-info btn-block a2"
                  href="https://twitter.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" />
                </a>
              </div>
              <div className="group">
                <a
                  title="Sign in with gmail"
                  className="btn btn-danger btn-block a3"
                  href="https://accounts.google.com/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-google" />
                </a>
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group-btn">
              <button className="btn btn-form btn-black-outline ">Login</button>

              <div className="center red-text">
                {authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </form>
        </section>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
