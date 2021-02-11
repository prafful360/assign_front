import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { remove } from "./postDeleteApi";

class postRender extends Component {
  state = {
    post: [],
    comments: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const postId = this.props.match.params.id;

    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({ post: res.data });
      });
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => {
        // console.log(res.data);
        this.setState({ comments: res.data, loading: false });
      });
  }

  renderPost = (post) => (
    <>
      <div className="card bg-light">
        <div className="card-header">{post.title}</div>
        <div className="card-body">
          <div className="card-text">{post.body}</div>
        </div>
      </div>
    </>
  );
  renderComments = (comment) => (
    <>
      {comment.map((comment, i) => (
        <>
          <div className="card-body bg-light" key={i}>
            <div className="card-title title">Name: {comment.name}</div>
            <hr />
            <div className="card-text">{comment.body}</div>
          </div>
        </>
      ))}
    </>
  );
  deletePost = () => {
    const postId = this.props.match.params.id;
    // Delete API not defined
    remove(postId);
  };

  deleteConfirmed = () => {
    let answer = window.confirm("Are you sure you want to delete your post?");
    if (answer) {
      this.deletePost();
    }
  };
  renderFormData = () => {
    return (
      <>
        <br />
        <div className="container">
          <button className="btn bg-dark">
            <Link to={`/edit/post/${this.state.post.id}`}>Edit</Link>
          </button>

          <button
            className="btn btn-danger mx-4"
            onClick={this.deleteConfirmed}
          >
            Delete
          </button>
        </div>
        <br />
        <div className="container">
          <div>{this.renderPost(this.state.post)}</div>
          <br />
          <div className="card">
            <div className="card-header">Comments</div>
            {this.renderComments(this.state.comments)}
          </div>
        </div>
      </>
    );
  };
  loader = () => (
    <div className="container text-align-c">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
  render() {
    return <>{this.state.loading ? this.loader() : this.renderFormData()}</>;
  }
}

export default withRouter(postRender);
