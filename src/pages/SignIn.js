import React, { Component } from 'react'
import "./Contact.css"

class SignIn extends Component {
 
  render() {

    return (
      <section className="container">
     <div className="headerContact">
              <h2 className="">
              Sign In</h2>
              
     </div> 
        <form className="white" >
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email'  className="form-control"  />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password"  className="form-control" id='password'  />
          </div>
          <div className="input-group-btn">
          <button  className="btn btn-form btn-black-outline ">
          Login
          </button>
        
          </div>
          <div className="social-buttons ">
            <a  className="btn btn-primary btn-block" href="https://fr-fr.facebook.com/login/"><i className="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
            <a  className="btn btn-info btn-block" href="https://twitter.com/login"><i className="fa fa-twitter"></i> Sign in with <b>Twitter</b></a>
		      	<a  className="btn btn-danger btn-block" href="https://accounts.google.com/signin"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
            </div>
        </form>
     
      </section>
    )
  }
}


export default SignIn