import "./App.css";
import Header from "./components/Header"
import Homepage from "./pages/Homepage";
import Alunos from "./pages/Alunos";
import Cadastro from './pages/Cadastro'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact={true}>
          <Homepage />
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

export default App;
