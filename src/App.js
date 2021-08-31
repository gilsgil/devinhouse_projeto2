import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import Alunos from "./pages/alunos/alunos";
import Cadastro from "./pages/cadastro/cadastro";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/alunos">
            <Alunos />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
