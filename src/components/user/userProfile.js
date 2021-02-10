import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

class userProfile extends Component {
  state = {
    user: [],
    address: [],
  };
  //   address = Object.keys(this.state.user.address);
  //   addressValue = Object.values(this.state.user.address);
  componentDidMount(props) {
    // console.log(this.props.match.params); // finding location
    const userId = this.props.match.params.userId;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        const user = res.data;
        const address = user.address;
        this.setState({ user: user, address: address });
        // console.log(address);
        // console.log(this.state.user);
        // console.log("UserProfile  ", res); //For Checking
      });
  }
  renderUserDetails = (user) => (
    <>
      {Object.entries(user)
        .slice(1)
        .map(([key, val], index) => {
          if (typeof val != "object") {
            //   console.log(key, val, index);
            return (
              <>
                <tr className="bg-light " key={index}>
                  <td>
                    {" "}
                    <strong>{key}</strong>{" "}
                  </td>
                  <td>{val}</td>
                </tr>
              </>
            );
          }
        })}

      {/* <ul className="card-body">
        {Object.keys(add).map((address) => (
          <>
            <li className="card-text" key={address}>
              {address}
            </li>
            <hr />
          </>
        ))}
      </ul> */}
    </>
  );
  renderUserAdd = (add) => (
    <>
      {Object.entries(add).map(([key, val], index) => {
        if (typeof val != "object") {
          return (
            <>
              <tr className="bg-light " key={index}>
                <td>
                  {" "}
                  <strong>{key}</strong>{" "}
                </td>
                <td>{val}</td>
              </tr>
            </>
          );
        }
      })}
    </>
  );

  render() {
    const { user, address } = this.state;
    return (
      <>
        <hr className="container" />

        <div className="container">
          User: {user.username}
          <hr />
          <div className="card">
            <table className="card-table table user-detail">
              {this.renderUserDetails(user)}
              <th>Address</th>
              {this.renderUserAdd(address)}
            </table>
          </div>
          <hr />
          <div className="container text-align-c">
            <Link to={`/user/${user.id}/posts`}>
              <button className="btn btn-primary btn-margin">Posts</button>
            </Link>
            <Link to={`/user/${user.id}/todos`}>
              <button className="btn btn-primary btn-margin">Todos</button>
            </Link>
            <Link to={`/user/${user.id}/album`}>
              <button className="btn btn-primary btn-margin">Albums</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(userProfile); // withRouter used for match params
