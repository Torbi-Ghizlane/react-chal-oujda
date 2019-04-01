import React, { Component } from 'react'
import "./Contact.css"

class SignUp extends Component {
  
  render() {
  
    return (
      <section className="container">
       <div className="headerContact">
              <h2 className="">
              Sign Up</h2>
              
     </div> 
        <form className="white">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' className="form-control" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' className="form-control" />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' className="form-control"  />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' className="form-control"  />
          </div>
          <div className="input-group-btn">
            <button className="btn btn-form btn-black-outline">Sign Up</button>
        
          </div>
          
        </form>
      </section>
    )
  }
}


export default SignUp