import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Status from "./Components/Status/Status";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="home">
            <Home></Home>
          </Route>
          <Route path="/status">
            <Status />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
