import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Cake from "./Components/Cakes";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to="/Cakes" exact activeStyle={{ color: "green" }}>
                Cakes
              </NavLink>
            </li>
            <li>
              <NavLink to="/about/" exact activeStyle={{ color: "green" }}>
                About
              </NavLink>
            </li>
          </ul>

          <Route
            path="/Cakes"
            exact
            strict
            render={() => {
              return <Cake></Cake>;
            }}
          />
          <Route
            path="/About/"
            exact
            strict
            render={() => {
              return <h1>About </h1>;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
