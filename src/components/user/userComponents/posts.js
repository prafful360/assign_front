import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import Home from "../../core/home";

class UserPosts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((res) => {
        const posts = res.data;
        this.setState({ posts });
        // console.log(res.data);
      });
    // console.log(this.props); // For confirmation of fetching userid from props
  }
  renderUserPosts = (posts) => (
    <>
      {posts.map((post, i) => (
        <div className="card-text text-capitalize" key={i}>
          Title :
          <Link to={`/post/${post.id}`}>{post.title.substring(0, 15)}...</Link>
          <hr />
        </div>
      ))}
    </>
  );

  render() {
    return (
      <div className="container">
        <hr />
        <div className="card ">
          <div className="card-header">Posts by the user</div>
          <div className="card-body">
            {this.renderUserPosts(this.state.posts)}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserPosts);
