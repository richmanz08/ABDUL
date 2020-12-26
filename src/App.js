import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginandRegister from "./LoginandRegister";
import Loginpage from "./Loginpage";
import Mainwebsite from "./Mainwebsite";
import RegisterandLogin from "./RegisterandLogin";
import Topper from "./Topper";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact={true} component={Mainwebsite} />
        <Route path="/Loginpage" exact={true} component={Loginpage} />
        <Route
          path="/LoginandRegister"
          exact={true}
          component={LoginandRegister}
        />
        <Route path="/Topper" exact={true} component={Topper} />
        <Route
          path="/RegisterandLogin"
          exact={true}
          component={RegisterandLogin}
        />
        <Route path="/Mainwebsite" exact={true} component={Mainwebsite} />
      </div>
    );
  }
}
export default App;
