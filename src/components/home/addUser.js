import React from "react";
import axios from "axios";

export default class addUser extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="container">
        <form className="input-group mb-3" onSubmit={this.handleSubmit}>
          <div className="input-group-prepend">
            <label className="input-group-text">UserName:</label>
          </div>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Add User"
          />
          <button className="btn bg-light input-group-append" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
