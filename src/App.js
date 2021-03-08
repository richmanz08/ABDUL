import React, { Component } from "react";
import { Route } from "react-router-dom";
import HOME from "./HOME";
import Mainwebsite from "./Mainwebsite";
import ModePage from "./ModePage";
import PageDefault from "./PageDefault";
import ShopScreen from "./ShopScreen";


class App extends Component {
  render() {
    return (
      <Route>
        
        <Route path="/" exact={true} component={HOME}/>
        {/* <Route path="/Home" exact={true} component={HOME}/> */}
        <Route path="/PageDefault"   exact={true} component={Mainwebsite} />
        <Route path="/Mainwebsite" exact={true} component={Mainwebsite} />
        <Route path="/ShopScreen"    exact={true} component={Mainwebsite} />
        <Route path="/Profile"       exact={true} component={Mainwebsite} />
          <Route path="/Inventory"     exact={true} component={Mainwebsite} />
          <Route path="/Modepage"      exact={true} component={Mainwebsite} />
          <Route path="/CreateScreens" exact={true} component={Mainwebsite} />
          <Route
            path="/PostkratuManagement"
            exact={true}
            component={Mainwebsite}
          />
          <Route path="/Showkratu" exact={true} component={Mainwebsite}/>
      </Route>
    );
  }
}
export default App;
