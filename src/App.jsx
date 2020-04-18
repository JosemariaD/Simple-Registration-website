import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import "./App.css";
import Navbar from "./components/headerComponents/navBar";
import Home from "./components/pages/home";
import Footer from "./components/footerComponents/footer";
import CreateUsers from "./components/pages/createUsers";
import Contact from "./components/pages/contact";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/CreateUsers" component={CreateUsers} />
          <Route exact path="/Contact" component={Contact} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
