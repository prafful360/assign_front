import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Loader from "../core/Loader";
import AddUser from "./addUser";

class Users extends Component {
  state = {
    users: [],
    loading: false,
    showAddUser: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const users = res.data;

        this.setState({ users: users, loading: false });
      });
  }
  //create new todo
  addUser = (username, name, phone, email) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users/", {
        username,
        name,
        phone,
        email,
      })
      .then((res) =>
        this.setState({
          users: [...this.state.users, res.data],
        })
      );
  };

  onClick = (e) => {
    this.setState({
      showAddUser: true,
    });
  };

  renderUsers = (users) => {
    if (users.length === "0") {
      return <div>No Users</div>;
    } else {
      return (
        <>
          {users.map((user, i) => (
            <div className="card bg-light mb-3 card-half" key={i}>
              <div className="card-header">
                {" "}
                <strong>User: </strong>{" "}
                <Link to={`/user/${user.id}`}>{user.username}</Link>
              </div>
              <div className="card-body">Name: {user.name}</div>
            </div>
          ))}
        </>
      );
    }
  };

  render() {
    return (
      <>
        <hr className="container " />
        <div className="container" id="">
          <div className="row">
            {this.state.loading ? (
              <Loader />
            ) : (
              this.renderUsers(this.state.users)
            )}{" "}
          </div>
          <button className="btn btn-primary" onClick={this.onClick}>
            Add User
          </button>
        </div>

        <hr className="container" />
        {this.state.showAddUser ? <AddUser addUser={this.addUser} /> : ""}
      </>
    );
  }
}

export default withRouter(Users);
