import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

class UserPosts extends Component {
  state = {
    posts: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const userId = this.props.match.params.userId;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((res) => {
        const posts = res.data;
        this.setState({ posts: posts, loading: false });
        // console.log(res.data);
      });
    // console.log(this.props); // For confirmation of fetching userid from props
  }
  renderUserPosts = (posts) => {
    if (posts.length === "0") {
      return <div>No Posts</div>;
    } else {
      return (
        <>
          {posts.map((post, i) => (
            <div className="card-text text-capitalize" key={i}>
              Title :
              <Link to={`/post/${post.id}`}>
                {post.title.substring(0, 15)}...
              </Link>
              <hr />
            </div>
          ))}
        </>
      );
    }
  };
  loaderDiv = () => (
    <div className="container text-align-c">
      <div class="spinner-border text-primary " role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
  render() {
    return (
      <div className="container">
        <hr />
        <div className="card ">
          <div className="card-header">Posts by the user</div>
          <div className="card-body">
            {this.state.loading
              ? this.loaderDiv()
              : this.renderUserPosts(this.state.posts)}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserPosts);
