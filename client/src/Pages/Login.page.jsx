import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
import axios from "axios";
import { setAuthenticationHeader } from "../utils/Auth";

function Login(props) {
  const [user, setUser] = useState({});
  const [adminUser, setAdminUser] = useState({});
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

  function handleAdminLogin(e) {
    setAdminUser({
      ...adminUser,
      [e.target.name]: e.target.value,
    });
  }

  function handleLoginPost() {
    axios
      .post("https://react-redux-bookstore-server.herokuapp.com/api/login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          localStorage.setItem("jsonwebtoken", token);
          setAuthenticationHeader(token);
          props.onAuthenticated(true);
          props.onAdministrator(false);
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

  function handleAdminPost() {
    axios
      .post("https://react-redux-bookstore-server.herokuapp.com/api/login", {
        username: adminUser.adminUsername,
        password: adminUser.adminPassword,
      })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          localStorage.setItem("jsonwebtoken", token);
          setAuthenticationHeader(token);
          props.onAuthenticated(true);
          props.onAdministrator(true);
          alert(response.data.message);
          props.history.push("/Admin");
        } else {
          alert(response.data.message);
          alert("response failed");
          setAdminUser({
            ...adminUser,
            password: "",
          });
        }
      });
  }

  function guestLoginPost() {
    fetch("https://react-redux-bookstore-server.herokuapp.com/login", {
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

  return (
    <div>
      <div>
        <h1>Login Page</h1>
      </div>
      <br></br>
      <div>
        <h2>User Login</h2>
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
      <br></br>
      <div>
        <h2>Administrator Login</h2>
        <input
          type="text"
          placeholder="Admin Username"
          name="adminUsername"
          onChange={handleAdminLogin}
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          name="adminPassword"
          onChange={handleAdminLogin}
          required
        />
        <button onClick={handleAdminPost}>Admin Login</button>
      </div>
      <br></br>
      <div>
        <button onClick={guestLoginPost}>Guest Login</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch(actionCreators.authenticated(true)),
    onAdministrator: () => dispatch(actionCreators.administrator(true)),
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
//   fetch("https://react-redux-bookstore-server.herokuapp.com/login", {
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

//   fetch("https://react-redux-bookstore-server.herokuapp.com/login", {
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

//   fetch("https://react-redux-bookstore-server.herokuapp.com/api/login", {
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
