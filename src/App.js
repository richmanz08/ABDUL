import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginandRegister from "./LoginandRegister";
import Loginpage from "./Loginpage";
import Mainwebsite from "./Mainwebsite";
import ModePage from "./ModePage";
import PageDefault from "./PageDefault";
import RegisterandLogin from "./RegisterandLogin";

class App extends Component {
  render() {
    return (
      <Route>
        <Route path="/" component={Mainwebsite} />
        <Route path="/Mainwebsite" exact={true} component={Mainwebsite} />
        <Route path="/Loginpage" exact={true} component={Loginpage} />
       
        <Route
          path="/LoginandRegister"
          exact={true}
          component={LoginandRegister}
        />
        <Route path="/RegisterandLogin" component={RegisterandLogin} />
        {/* <Route path="/PageDefault" component={Mainwebsite} /> */}
      </Route>
    );
  }
}
export default App;
