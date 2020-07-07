// import React from "react";
// import { connect } from "react-redux";
// import * as actionCreators from "../store/creators/actionCreators";
// import BootstrapCard from "./components/BootstrapCard.component";
// import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function AddUser(props) {
  const [user, setUser] = useState({});

  function handleRegister(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleRegisterPost() {
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        alert(response.message);
        props.history.push("/Login");
      });
  }

  return (
    <div>
      <h1>Registration Page</h1>
      <input
        type="text"
        placeholder="Username"
        name="username"
        onChange={handleRegister}
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleRegister}
        required
      />
      <button onClick={handleRegisterPost}>Register User</button>
    </div>
  );
}

export default AddUser;
//const [username, setUsername] = useState("");
// const[password, setPassword] = useState("")

// function handleRegister(e) {
//   setUsername(e.target.value);
// }

// function handleRegisterPost() {
//   fetchAddUser();
// }

// const handleLoginPost = () => {
//   console.log(username);
//   fetch("http://localhost:3001/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(username),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       alert(response.message);
//       // props.history.push("/");
//     });
//   props.onAuthenticated(true);
// };
