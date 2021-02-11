import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Routes
import Home from "./components/core/home";
import Header from "./components/core/header";
import UserProfile from "./components/user/userProfile";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user/:userId">
            <UserProfile />
          </Route>
          <Route exact path="/user/:userId/posts">
            <Home />
          </Route>
          <Route exact path="/post/:id">
            <Home />
          </Route>
          <Route exact path="/user/:userId/todos">
            <Home />
          </Route>
          <Route exact path="/user/:userId/albums">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
