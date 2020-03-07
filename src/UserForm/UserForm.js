import React, { Component } from "react";
import { connect } from "react-redux";
import { userFormAction } from "../actions/userFormAction";

export class UserForm extends Component {
  formInputHandler = event => {
    const inputData = {
      field: event.target.name,
      value: event.target.value
    };
    this.props.userFormAction(inputData);
  };
  render() {
    return (
      <form>
        <label>
          First Name
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={this.props.userConfig.first_name}
            onChange={this.formInputHandler}
          />
        </label>
        <br />
        <label>
          Last Name
          <input
            type="text"
            name="last_name"
            value={this.props.userConfig.last_name}
            onChange={this.formInputHandler}
          />
        </label>
        <br />
        <label>
          Age
          <input
            type="text"
            name="age"
            value={this.props.userConfig.age}
            onChange={this.formInputHandler}
          />
        </label>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  userFormAction: value => dispatch(userFormAction(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
