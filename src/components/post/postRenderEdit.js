import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class postRenderEdit extends Component {
  state = {
    title: "",
    body: "",
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const postId = this.props.match.params.id;
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/`)
      .then((res) => {
        this.setState({
          title: res.data.title,
          body: res.data.body,
          loading: false,
        });
      });
  }
  updateConfirm = () => {
    let answer = window.confirm("Are you sure you want to update your post?");
  };
  renderEditForm = () => {
    return (
      <>
        <div className="form">
          <form action="">
            <div className="form-group">
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                className="form-control"
                value={this.state.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Body">Content</label>
              <textarea
                type="text"
                className="form-control "
                value={this.state.body}
                rows="5"
              />
            </div>
            {/* cannot update hardcoded data */}
            <button className="btn btn-primary" onClick={this.updateConfirm}>
              Submit
            </button>
          </form>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="container">
        <div>
          {this.state.loading ? "Fetching Post..." : this.renderEditForm()}
        </div>
      </div>
    );
  }
}

export default withRouter(postRenderEdit);
