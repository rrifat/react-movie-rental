import React, { Component } from "react";
import Movies from "./components/Movies/Movies";
import Customers from "./components/Customers/Customers";
import Rental from "./components/Rental/Rental";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import MovieForm from "./components/MovieForm/MovieForm";
import LoginForm from "./components/LoginForm/LoginForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      path: "path-1"
    };
  }

  changePath() {
    this.setState({ path: "path-2" });
  }
  render() {
    return (
      <main className="container">
        <NavBar />
        <Switch>
          <Route path="/movie/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rental" component={Rental} />
          <Route path="/login" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />

          <Redirect from="/" to="/movies" exact />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
