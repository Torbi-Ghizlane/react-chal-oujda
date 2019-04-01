import React, { Component } from "react";
import Router from "Router.js"

import Header from "common/Header";

import footerList from "mocks/footerList"
import Footer from "common/Footer"  
import "./pricing.css"
import "./App.css";
import navList from "mocks/navList";


class App extends Component {
  render() {
    return (
      <div>
        <Header appTitle="Sqli App" navLinks={navList} />
        <Router />
        <Footer  footerInfo={footerList} /> 
      </div>
    );
  }
}

export default App;
