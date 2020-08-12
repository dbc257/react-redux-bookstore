import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
import { setAuthenticationHeader } from "../utils/Auth";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

function Signout(props) {
  props.onAuthenticated();
  props.onAdministrator();
  localStorage.removeItem("jsonwebtoken");
  localStorage.removeItem("jwt_access_token");
  setAuthenticationHeader(null);

  return (
    <div>
      <Card>
        <Card.Header className="text-center" as="h1">
          You are signed out!
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-center">
            <LinkContainer to="/">
              <Button variant="primary" size="lg" type="submit">
                Home
              </Button>
            </LinkContainer>
            <p></p>
            <LinkContainer to="/Login">
              <Button variant="success" size="lg" type="submit">
                Login
              </Button>
            </LinkContainer>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch(actionCreators.authenticated(false)),
    onAdministrator: () => dispatch(actionCreators.administrator(false)),
  };
};
// export default Signout;
export default connect(null, mapDispatchToProps)(Signout);

//   function handleLogin(e) {
//   setUser({
//     ...user,
//     [e.target.name]: e.target.value,
//     // setUsername(e.target.value);
//   });
// }

//   function handleLoginPost() {
//     fetch("https://react-redux-bookstore-server.herokuapp.com/login", {
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

// import BootstrapCard from "./components/BootstrapCard.component";
// import Button from "react-bootstrap/Button";
// import React, { useState } from "react";
