import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Routes
import Home from "./components/core/home";
import Header from "./components/core/header";
import UserProfile from "./components/user/userProfile";
import UserPosts from "./components/user/userComponents/posts";
import UserAlbum from "./components/user/userComponents/album";
import UserTodos from "./components/user/userComponents/todos";
import postRender from "./components/post/postRender";
import postRenderEdit from "./components/post/postRenderEdit";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:userId" component={UserProfile} />
          <Route exact path="/user/:userId/posts" component={UserPosts} />
          <Route exact path="/post/:id" component={postRender} />
          <Route exact path="/edit/post/:id" component={postRenderEdit} />

          <Route exact path="/user/:userId/todos" component={UserTodos} />
          <Route exact path="/user/:userId/albums" component={UserAlbum} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
