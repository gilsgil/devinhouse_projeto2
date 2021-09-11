import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Mensagem from "./components/pages/Mensagem/Mensagem";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/mensagem" exact component={Mensagem} />
        </Switch>
      </Router>
    );
  }
}

export default App;
