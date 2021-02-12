import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Todos from "../../todo/Todos";
import AddTodo from "../../todo/AddTodo";

// import "./App.scss";
import axios from "axios";
import Loader from "../../core/Loader";

class todoRender extends Component {
  state = {
    todos: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const userId = this.props.match.params.userId;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((res) => this.setState({ todos: res.data, loading: false }));
  }
  //toggle complete
  markComplete = (id, e) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            completed: todo.completed,
          });
        }
        return todo;
      }),
    });
  };

  //update text in state when user  types in
  editText = (id, e) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = e.target.value;
        }
        return todo;
      }),
    });
  };

  //save user edited text when user clicks outside the item row
  saveText = (id, e) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            title: todo.title,
          });
        }
        return todo;
      }),
    });
  };

  //delete todo
  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  //create new todo
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos/", {
        title,
        completed: false,
      })
      .then((res) =>
        this.setState({
          todos: [...this.state.todos, res.data],
        })
      );
  };

  render() {
    return (
      <div className="container">
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
        </div>

        <div className="card bg-light mt-4">
          {this.state.loading ? (
            <Loader />
          ) : (
            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              delTodo={this.delTodo}
              editText={this.editText}
              saveText={this.saveText}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(todoRender);
