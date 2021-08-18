import React, { Component } from "react";

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter task"
          value={this.state.task}
          onChange={this.handleChange}
          autoFocus
        />
        <button className="add" type="submit">
          ADD
        </button>
      </form>
    );
  }
}

export default CreateTask;
