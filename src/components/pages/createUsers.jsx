import React, { Component } from "react";

class CreateUsers extends Component {
  state = {
    username: "",
    location: "",
    messageErr: "",
    count: 0,
  };
  validateForm = (event) => {
    event.preventDefault();
    alert(
      "You have submitted " +
        this.state.username +
        " living in " +
        this.state.location
    );
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  countReg = () => {
    if (this.state.count != 0 || this.state.username !== "") {
      this.setState({ count: this.state.count + 1 });
    }
  };

  render() {
    return (
      <section>
        <h2>Fill in your Details </h2>
        <span>{this.state.count} persons registered</span>
        <form name="reg" onSubmit={this.validateForm} action="/">
          <p>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Location"
              name="location"
              onChange={this.handleChange}
              required
            />
          </p>
          <button type="submit" onClick={this.countReg}>
            Register
          </button>
        </form>
        {this.handleUser()}
      </section>
    );
  }
  handleUser() {
    const { username, location } = this.state;
    return username && location != "" ? (
      <h2>
        You have Entered "{username}" living at "{location}" Click Register to
        Save{" "}
      </h2>
    ) : null;
  }
}

export default CreateUsers;
