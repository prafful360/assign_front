import axios from "axios";
import React, { Component } from "react";

class AddUser extends Component {
  state = {
    username: "",
    name: "",
    phone: "",
    email: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    window.confirm("Are you sure you want to add this user?");
    this.props.addUser(
      this.state.username,
      this.state.name,
      this.state.phone,
      this.state.email
    );
    this.setState({
      username: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  render() {
    const { username, name, phone, email } = this.state;
    return (
      <div className="container">
        <form className="form-group" onSubmit={this.onSubmit}>
          <div className="card-header">Add User</div>
          <div className="card-body">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={this.onChange}
            />
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
            />
            <input
              type="number"
              className="form-control"
              name="phone"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={this.onChange}
            />
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
            />
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
