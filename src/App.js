import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Presentation from "./Presentation";
import Attestation from "./Attestation";
import ProfileForm from "./ProfileForm";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Attestation />
          </Route>
          <Route exact path="/form">
            <ProfileForm />
          </Route>
          <Route exact path="/presentation">
            <Presentation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
