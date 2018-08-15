import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import News from "./components/news";
import Navbar from "./components/customNavBar";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header>
            <Router>
              <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/news" component={News} />
              </div>
            </Router>
          </header>
          <hr />
        </div>
      </Provider>
    );
  }
}

export default App;
