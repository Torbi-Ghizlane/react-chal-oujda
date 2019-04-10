import React, { Component } from "react";
import Router from "Router.js";

import Header from "common/Header";

import footerList from "mocks/footerList";
import Footer from "common/Footer";

import "./App.css";
import { navList, auth } from "mocks/navList";

class App extends Component {
  render() {
    return (
      <div>
        <Header appTitle="Sqli App" navLinks={navList} authLinks={auth} />
        <Router />
        {/*      <Header appTitle="Sqli App" navLinks={navList} />
        <AppHeader />
        <PriceCard prices={cardList}/>*/}
        <Footer footerInfo={footerList} />
      </div>
    );
  }
}

export default App;
