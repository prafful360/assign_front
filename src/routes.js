import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Routes
import Home from "./components/core/home";
import Header from "./components/core/header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
