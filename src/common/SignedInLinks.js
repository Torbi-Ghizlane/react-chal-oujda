import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "store/actions/authActions";

const SignedInLinks = props => {
  return (
    <div>
      <button className="btn btn-outline-primary" onClick={props.signOut}>
        Log Out
      </button>
      <NavLink to="/" className="btn btn-outline-primary btn-circle btn-lg">
        {props.profile.initials}
      </NavLink>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
