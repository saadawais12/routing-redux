import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Cake from "./Components/Cakes";
import store from "./redux/store";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
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
          <Route
            path="/"
            exact
            strict
            render={() => {
              return (
                <div>
                  <ul>
                    <li>
                      <NavLink
                        to="/Cakes"
                        exact
                        activeStyle={{ color: "green" }}
                      >
                        Cakes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about/"
                        exact
                        activeStyle={{ color: "green" }}
                      >
                        About
                      </NavLink>
                    </li>
                  </ul>
                </div>
              );
            }}
          />

          <Route
            path="/Cakes"
            exact
            strict
            render={() => {
              return (
                <Provider store={store}>
                  <div className="App">
                    <CakeContainer></CakeContainer>
                  </div>
                </Provider>
              );
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
