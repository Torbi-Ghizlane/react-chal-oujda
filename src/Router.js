import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "pages/About";
import Home from "pages/Home";
import Contact from "pages/Contact";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/SignIn" component={SignIn} />
    <Route path="/SignUp" component={SignUp} />
  </Switch>
);

export default Router;
