import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      color: this.props.todo.completed ? "#7a7a7a" : "#000",
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <li
        className="card-text text-capitalize list-group-item d-flex justify-content-between input-group py-0"
        style={{ border: "none" }}
      >
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div
              className="input-group-text"
              onClick={this.props.markComplete.bind(this, id)}
            >
              <input type="checkbox" checked={completed} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            value={title}
            style={this.getStyle()}
            onChange={this.props.editText.bind(this, id)}
            onBlur={this.props.saveText.bind(this, id)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-warning"
              onClick={this.props.delTodo.bind(this, id)}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
