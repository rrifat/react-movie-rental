import React from "react";
import Input from "../Input/Input";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { email: "", password: "" },
      errors: {}
    };
  }

  validate() {
    var { account } = this.state;
    var errors = {};

    if (account.email.trim() === "") {
      errors.email = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  handleOnSubmit = event => {
    event.preventDefault();
    var errors = this.validate();
    this.setState({ errors });
    if (errors) return;
  };

  validateProperty(input) {
    if (input.name === "email" && input.value.trim() === "")
      return "Username is required";
    if (input.name === "password" && input.value.trim() === "")
      return "Password is required";
  }

  handleOnChange = ({ currentTarget: input }) => {
    var errors = { ...this.state.errors };
    var errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    var account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    var { email, password, errors } = this.state;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <Input
          name="email"
          value={email}
          onChange={this.handleOnChange}
          error={errors.email}
        />
        <Input
          name="password"
          value={password}
          onChange={this.handleOnChange}
          error={errors.password}
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    );
  }
}
export default LoginForm;
