import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "./UserForm/UserForm";

import "./App.css";

export class App extends Component {
  buttonClickHandler = event => {};

  render() {
    return (
      <div className="App">
        <header className="">Header</header>
        <main>
          <UserForm />
          <pre>{JSON.stringify(this.props)}</pre>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
