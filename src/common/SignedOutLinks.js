import React from "react";
import { Link, withRouter } from "react-router-dom";

const SignedOutLinks = props => {
  return (
    <div>
      {props.navLinks.map((link, index) => (
        <Link
          key={index}
          className=" ml-1 btn btn-outline-primary my-2 my-sm-0"
          to={link.href}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default withRouter(SignedOutLinks);
