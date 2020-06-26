// import React from "react";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
// import BootstrapCard from "./components/BootstrapCard.component";
// import Button from "react-bootstrap/Button";

function Signout(props) {
  const [user, setUser] = useState({});
  props.onAuthenticated(false);
  //   function handleLogin(e) {
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //     // setUsername(e.target.value);
  //   });
  // }

  //   function handleLoginPost() {
  //     fetch("http://localhost:3001/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     })
  //       .then((res) => res.json())
  //       .then((response) => {
  //         alert(response.message);
  //     props.history.push("/Home");
  //   });

  return (
    <div>
      <h1>You are signed out!</h1>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch(actionCreators.authenticated(false)),
  };
};
// export default Login;
export default connect(null, mapDispatchToProps)(Signout);
