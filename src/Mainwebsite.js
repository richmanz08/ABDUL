import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Inventory from "./Inventory";
import PostkratuManagement from "./PostkratuManagement";
import PageDefault from "./PageDefault";
import "./Mainwebsite.css"
import ModePage from "./ModePage";
import CreateScreens from "./CreateScreens";
import ShopScreen from "./ShopScreen";
import ShowKratuScreen from "./ShowKratuScreen";
import HOME from "./HOME";
function Mainwebsite() {
  return (
    
      <Router>
        <Navbar />

        <Switch>
          {/* <Route path="/"              exact={true} component={HOME} /> */}
          <Route path="/"              exact={true} component={PageDefault} />S
          <Route path="/Mainwebsite"   exact={true} component={PageDefault} />
          <Route path="/PageDefault"   exact={true} component={PageDefault} />
          <Route path="/Modepage"      exact={true} component={ModePage} />
          <Route path="/CreateScreens" exact={true} component={CreateScreens} />
          <Route path="/ShopScreen"    exact={true} component={ShopScreen} />
          <Route path="/profile"       exact={true} component={Profile} />
          <Route path="/Inventory"     exact={true} component={Inventory} />
          <Route
            path="/PostkratuManagement"
            exact={true}
            component={PostkratuManagement}
          />
          <Route path="/Showkratu" exact={true} component={ShowKratuScreen}/>
         
        </Switch>
      </Router>

 
    
  );
}

export default Mainwebsite;
