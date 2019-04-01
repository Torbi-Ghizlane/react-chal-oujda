import React from "react";
import {NavLink, Link} from 'react-router-dom'

const Header = (props) => {

return(
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
   <Link className="my-0 mr-md-auto font-weight-normal" to= '/' ><h5>{props.appTitle}</h5></Link>
    <nav className="my-2 my-md-0 mr-md-3">
    <ul className=" top-menu" >
    {props.navLinks.map((link, index) => (
    <li className="" key={index}>
    <NavLink className=" p-2 text-dark" to={link.href}>{link.title}</NavLink>
    </li>
    ))}
   
    </ul>
    </nav> 
    <NavLink className=" btn btn-outline-primary"  to="/SignIn ">Sign in</NavLink>
    <NavLink  className=" btn btn-outline-primary" to="/SignUp ">Sign up</NavLink>   
  </div>
);
  }

export default Header
