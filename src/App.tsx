import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TeamProjects from "./components/projects";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <TeamProjects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
