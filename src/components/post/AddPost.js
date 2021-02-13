import React, { Component } from "react";

class AddUser extends Component {
  state = {
    title: "",
    body: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    window.confirm("Are you sure you want to add this user?");
    this.props.addPost(this.state.title, this.state.body);
    this.setState({
      title: "",
      body: "",
    });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div className=" mt-2">
        <form className="form-group" onSubmit={this.onSubmit}>
          <div className="card-header border-light">Add User</div>
          <br />
          <div className="card">
            <input
              type="text"
              className="form-control border-light"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.onChange}
            />
            <br />
            <textarea
              rows="3"
              type="text"
              className="form-control border-light"
              name="body"
              placeholder="Content"
              value={body}
              onChange={this.onChange}
            />
            <br />
            <button
              type="submit"
              class="btn btn-primary mb-2"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
