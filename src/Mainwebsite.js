import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import profile from "./profile";
import Inventory from "./Inventory";
import PostkratuManagement from "./PostkratuManagement";
import PageDefault from "./PageDefault";
import "./Mainwebsite.css"
import ModePage from "./ModePage";
function Mainwebsite() {
  return (
    
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact={true} component={PageDefault} />
          <Route path="/Mainwebsite" exact={true} component={PageDefault} />
          <Route path="/PageDefault" exact={true} component={PageDefault} />
          <Route path="/Modepage" exact={true} component={ModePage} />
          <Route path="/profile" exact={true} component={profile} />
          <Route path="/Inventory" exact={true} component={Inventory} />
          <Route
            path="/PostkratuManagement"
            exact={true}
            component={PostkratuManagement}
          />
        </Switch>
      </Router>
      

    
  );
}

export default Mainwebsite;
