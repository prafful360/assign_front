import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import Loader from "../core/Loader";

class userProfile extends Component {
  state = {
    user: [],
    address: [],
    loading: false,
  };
  //   address = Object.keys(this.state.user.address);
  //   addressValue = Object.values(this.state.user.address);
  async componentDidMount(props) {
    // console.log(this.props.match.params); // finding location
    this.setState({ loading: true });
    const userId = this.props.match.params.userId;
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        const user = res.data;
        const address = user.address;
        this.setState({ user: user, address: address, loading: false });
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
                  <td className="border-light">
                    {" "}
                    <strong>{key}</strong>{" "}
                  </td>
                  <td className=" border-light">{val}</td>
                </tr>
              </>
            );
          }
        })}
    </>
  );
  renderUserAdd = (add) => (
    <>
      {Object.entries(add).map(([key, val], index) => {
        if (typeof val != "object") {
          return (
            <>
              <tr className="bg-light " key={index}>
                <td className="border-light">
                  {" "}
                  <strong>{key}</strong>{" "}
                </td>
                <td className="border-light">{val}</td>
              </tr>
            </>
          );
        }
      })}
    </>
  );
  renderFormData = () => {
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

              <th className="border-light">Address</th>

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
            <Link to={`/user/${user.id}/albums`}>
              <button className="btn btn-primary btn-margin">Albums</button>
            </Link>
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
    return (
      <>
        <div className="container">
          {this.state.loading ? <Loader /> : this.renderFormData()}
        </div>
      </>
    );
  }
}

export default withRouter(userProfile); // withRouter used for match params
