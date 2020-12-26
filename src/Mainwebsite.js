import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import profile from "./profile";
import inventory from "./inventory";
import PostkratuManagement from "./PostkratuManagement";
function Mainwebsite() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={profile} />
          <Route path="/inventory" component={inventory} />
          <Route path="/PostkratuManagement" component={PostkratuManagement} />
        </Switch>
      </Router>
    </div>
  );
}

export default Mainwebsite;