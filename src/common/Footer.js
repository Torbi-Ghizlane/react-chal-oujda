import React from "react";
import logo from 'images/svg/bootstrap-solid.svg'

const Footer = ({footerInfo = []}) => (
  <div className="container">

  
    <div className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src={logo} alt="" width="24" height="24" />
        <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
      </div>
     
      {footerInfo.map(({footerTitle,optionsFooter}, index) => (
        <div className="col-6 col-md" key={index}>
        <h5>{footerTitle}</h5>
        <ul className="list-unstyled text-small">
        {optionsFooter.map((option,i) =>
        <li key={i}><a className="text-muted" href={option.link}>{option.title}</a></li>
          )}
        </ul>
      </div>
      ))} 
  
    </div>
  </div>
  </div>

)
export default Footer;
