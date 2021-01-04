import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginandRegister from "./LoginandRegister";
import Loginpage from "./Loginpage";
import Mainwebsite from "./Mainwebsite";
import PageDefault from "./PageDefault";
import RegisterandLogin from "./RegisterandLogin";
// import inventory from "./inventory";
// import profile from "./profile";
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/Mainwebsite" exact={true} component={Mainwebsite} />
        <Route path="/Loginpage" exact={true} component={Loginpage} />
        <Route
          path="/LoginandRegister"
          exact={true}
          component={LoginandRegister}
        />
        <Route path="/RegisterandLogin" component={RegisterandLogin} />
        {/* <Route path="/Mainwebsite" exact={true} component={Mainwebsite} /> */}

        <Route path="/PageDefault" component={Mainwebsite} />
        <Route path="/profile" component={Mainwebsite} />
        <Route path="/inventory" component={Mainwebsite} />
        <Route path="/PostkratuManagement" component={Mainwebsite} />
      </div>
    );
  }
}
export default App;
