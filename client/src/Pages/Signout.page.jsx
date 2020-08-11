import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";

function Signout(props) {
  // const [user, setUser] = useState({});
  props.onAuthenticated(false);

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
