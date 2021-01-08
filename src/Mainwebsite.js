import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import profile from "./profile";
import Inventory from "./Inventory";
import PostkratuManagement from "./PostkratuManagement";
import PageDefault from "./PageDefault";
function Mainwebsite() {
  return (
    <div className="main">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact={true} component={PageDefault} />
          <Route path="/Mainwebsite" exact={true} component={PageDefault} />
          <Route path="/PageDefault" exact={true} component={PageDefault} />
          <Route path="/profile" exact={true} component={profile} />
          <Route path="/Inventory" exact={true} component={Inventory} />
          <Route
            path="/PostkratuManagement"
            exact={true}
            component={PostkratuManagement}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Mainwebsite;
