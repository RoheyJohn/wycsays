import React from "react";
import "./style.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './';

export default function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>This is the search page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}
