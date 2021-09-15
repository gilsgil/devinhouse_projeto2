import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NovaMensagem from "./components/NovaMensagem/NovaMensagem";
import Dashboard from "./pages/Dashboard/Dashboard";
import Mensagem from "./pages/Mensagem/Mensagem";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/mensagem" exact component={Mensagem} />
          <Route path="/nova" exact component={NovaMensagem} />
        </Switch>
      </Router>
    );
  }
}

export default App;
