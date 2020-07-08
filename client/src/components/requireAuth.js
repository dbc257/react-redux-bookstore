import * as actionCreators from "../store/creators/actionCreators";
import React, { Component } from "react";
import { connect } from "react-redux";

// higher order components
export default function (ComposedComponent) {
  class Authenticate extends Component {
    constructor(props) {
      super(props);

      // if the user is NOT authenticated then
      if (!this.props.isLoggedIn) {
        // send the user to the login component
        this.props.history.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (dispatch) => {
    return {
      onAuthenticated: () => dispatch(actionCreators.authenticated(true)),
    };
  };

  return connect(null, mapStateToProps)(Authenticate);
}
