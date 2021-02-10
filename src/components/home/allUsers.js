import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const users = res.data;

      this.setState({ users });
    });
  }
  // checkUsers = () => {
  //   if (this.state.count === 0) {
  //     return <div className="container">No Users</div>;
  //   } else {
  //     this.renderUsers(this.state.users);
  //   }
  // };

  renderUsers = (users) => (
    <React.Fragment>
      {users.map((user, i) => (
        <div className="card bg-light mb-3" key={i}>
          <div className="card-header">
            {" "}
            <strong>User: </strong>{" "}
            <Link to={`/user/${user.id}`}>{user.username}</Link>
          </div>
          <div className="card-body">Name: {user.name}</div>
        </div>
      ))}
    </React.Fragment>
  );

  render() {
    return (
      <>
        <hr className="container m-y-top" />
        <div className="container" id="">
          <div className="row">{this.renderUsers(this.state.users)} </div>
        </div>
        <hr className="container" />
      </>
    );
  }
}

export default withRouter(Users);
