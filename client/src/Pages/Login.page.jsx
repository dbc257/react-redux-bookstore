import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
import axios from "axios";
import { setAuthenticationHeader } from "../utils/Auth";

function Login(props) {
  const [user, setUser] = useState({});
  const [guestUser] = useState({
    username: "David",
    password: "1234",
  });

  function handleLogin(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function guestLoginPost() {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guestUser),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          props.onAuthenticated(true);
          alert(response.message);
          props.history.push("/");
        } else {
          alert(response.message);
          setUser({
            ...user,
            password: "",
          });
        }
      });
  }

  function handleLoginPost() {
    axios
      .post("http://localhost:3001/api/login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          localStorage.setItem("jsonwebtoken", token);
          setAuthenticationHeader(token);
          console.log(token);
          props.onAuthenticated(true);
          alert(response.data.message);
          props.history.push("/");
        } else {
          alert(response.data.message);
          alert("response failed");
          setUser({
            ...user,
            password: "",
          });
        }
      });
  }

  return (
    <div>
      <div>
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleLogin}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleLogin}
          required
        />
        <button onClick={handleLoginPost}>Login</button>
      </div>
      <div>
        <button onClick={guestLoginPost}>Guest Login</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch(actionCreators.authenticated(true)),
  };
};
// export default Login;
export default connect(null, mapDispatchToProps)(Login);

// const[email, setEmail] = useState("")
// const[password, setPassword] = useState("")

// function handleLogin(e) {
//   setUser({
//     ...user,
//     [e.target.name]: e.target.value,
//   });
// }

// const fetchLoginUser = () => {
//   fetch("http://localhost:3001/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       alert(response.message);
//       // props.history.push("/Register");
//     });

//   function handleLoginPost() {
//     fetchLoginUser();
//     props.onAuthenticated(true);
//   }

// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");

//   fetch("http://localhost:3001/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       if (response.success) {
//         props.onAuthenticated(true);
//         alert(response.message);
//         props.history.push("/");
//       } else {
//         alert(response.message);
//         setUser({
//           ...user,
//           password: "",
//         });
//       }
//     });
// }

// const handleJWTLogin = () => {
//   // perform a fetch request and pass username and password
//   // to the server

//   fetch("http://localhost:3001/api/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       if (result.success) {
//         // save the token in local storage
//         localStorage.setItem("jsonwebtoken", result.token);
//       } else {
//         // print out a message saying login failed
//       }
//     });
// };

//import { LinkContainer } from "react-router-bootstrap";
// import BootstrapCard from "./components/BootstrapCard.component";
// import Button from "react-bootstrap/Button";
