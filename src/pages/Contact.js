import React from 'react'
import "./Contact.css"

export default function Contact(props) {
  return <section className="container ">
          <div className="headerContact">
              <h2 className="">
                  CONTACT US</h2>
              
          </div> 
      <div className=" ">
         
          
                  <form className="" action="" method="post" >
                      <div className="">
                          <div className="" htmlFor="name">
                              <div className="">
                                  <label className="" htmlFor="name">Name</label>
                                  <input type="text" className="form-control" name="name"  id="name" />
                              </div>
                          </div>
                          <div className="" htmlFor="email">
                              <div className="">
                                  <label className="" htmlFor="email">Email</label>
                                  <input type="email" className="form-control" name="email"  id="email" />
                              </div>
                          </div>
                          <div className="" htmlFor="phone">
                              <div className="">
                                  <label className="" htmlFor="phone">Phone</label>
                                  <input type="tel" className="form-control" name="phone"  id="phone" />
                              </div>
                          </div>
                      </div>
                      <div className="" htmlFor="message">
                          <label className="" htmlFor="message">Message</label>
                          <textarea type="text" className="form-control" name="message" rows="7"  id="message"></textarea>
                      </div>
          
                      <div className="input-group-btn">
                      <button type="submit" className="btn btn-form btn-black-outline ">
                      SEND FORM
                      </button>
                      </div>
                  </form>
          
      </div>
</section>
}
















