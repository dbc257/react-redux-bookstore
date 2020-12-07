import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
import axios from "axios";
import { setAuthenticationHeader } from "../utils/Auth";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";

function Login(props) {
  const [user, setUser] = useState({});
  // const [adminUser, setAdminUser] = useState({});
  // const [guestUser] = useState({
  //   username: "David",
  //   password: "1234",
  // });

  function handleLogin(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  // function handleAdminLogin(e) {
  //   setAdminUser({
  //     ...adminUser,
  //     [e.target.name]: e.target.value,
  //   });
  // }
      // .post("https://react-redux-bookstore-server.herokuapp.com/login/user", {
  function handleLoginPost() {
    axios
      .post("http://localhost:3001/login/user", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          localStorage.setItem("jsonwebtoken", token);
          setAuthenticationHeader(token);
          props.onAuthenticated();
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

  // function handleAdminPost() {
  //   axios
  //     // .post("https://react-redux-bookstore-server.herokuapp.com/login/admin", {
  //     .post("http://localhost:3001/login/admin", {
  //       username: adminUser.adminUsername,
  //       password: adminUser.adminPassword,
  //     })
  //     .then((response) => {
  //       if (response.data.success) {
  //         const token = response.data.token;
  //         localStorage.setItem("jsonwebtoken", token);
  //         setAuthenticationHeader(token);
  //         props.onAuthenticated();
  //         props.onAdministrator();
  //         alert(response.data.message);
  //         props.history.push("/Admin");
  //       } else {
  //         alert(response.data.message);
  //         alert("response failed");
  //         setAdminUser({
  //           ...adminUser,
  //           password: "",
  //         });
  //       }
  //     });
  // }

  // function guestLoginPost() {
  //   // fetch("https://react-redux-bookstore-server.herokuapp.com/login/guest", {
  //   fetch("http://localhost:3001/login/guest", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(guestUser),
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       if (response.success) {
  //         props.onAuthenticated();
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

  return (
    <div>
      <div>
        <p>Username: David</p>
        <p>Password: 1234</p>
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
        <Button
        variant="success"
        // size="lg"
        type="submit"
        onClick={handleLoginPost}
        >
          Sign In
        </Button>
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

export default connect(null, mapDispatchToProps)(Login);


// <div>
//  <input 
//   type="text"
//   placeholder="Admin Username"
//   name="adminUsername"
//   onChange={handleAdminLogin}
//   required
//   />
//   <input 
//   type="password"
//   placeholder="Admin Password"
//   name="adminPassword"
//   onChange={handleAdminLogin}
//   required
//   />
//   <Button
//   variant="primary"
//   // size="lg"
//   type="submit"
//   onClick={handleAdminPost}
//   >
//     Sign In
//   </Button>
// </div>

  // <Card>
  //   <Card.Header className="text-center" as="h1">
  //     Login Page
  //   </Card.Header>
  //   <Card.Body>
  //     <Card.Text className="text-center">
  //       <Button
  //         variant="primary"
  //         size="lg"
  //         type="submit"
  //         onClick={guestLoginPost}
  //       >
  //         Guest Login
  //       </Button>
  //     </Card.Text>
  //   </Card.Body>
  // </Card>
  // <Card>
  //   <Card.Body>
  //     <Card.Title className="text-center" as="h3">
  //       User Login
  //     </Card.Title>
  //     <InputGroup size="lg">
  //       <FormControl
  //         type="text"
  //         placeholder="Username"
  //         name="username"
  //         onChange={handleLogin}
  //         required
  //         aria-label="Large"
  //         aria-describedby="inputGroup-sizing-sm"
  //       />
  //     </InputGroup>
  //     <br />
  //     <InputGroup size="lg">
  //       <FormControl
  //         type="password"
  //         placeholder="Password"
  //         name="password"
  //         onChange={handleLogin}
  //         required
  //         aria-label="Large"
  //         aria-describedby="inputGroup-sizing-sm"
  //       />
  //     </InputGroup>
  //     <br />
  //     <Card.Text className="text-center">
  //       <Button
  //         variant="success"
  //         size="lg"
  //         type="submit"
  //         onClick={handleLoginPost}
  //       >
  //         User Login
  //       </Button>
  //     </Card.Text>
  //   </Card.Body>
  // </Card>
  // <Card>
  //   <Card.Body>
  //     <Card.Title className="text-center" as="h3">
  //       Admin Login
  //     </Card.Title>
  //     <InputGroup size="lg">
  //       <FormControl
  //         type="text"
  //         placeholder="Admin Username"
  //         name="adminUsername"
  //         onChange={handleAdminLogin}
  //         required
  //         aria-label="Large"
  //         aria-describedby="inputGroup-sizing-sm"
  //       />
  //     </InputGroup>
  //     <br />
  //     <InputGroup size="lg">
  //       <FormControl
  //         type="password"
  //         placeholder="Admin Password"
  //         name="adminPassword"
  //         onChange={handleAdminLogin}
  //         required
  //         aria-label="Large"
  //         aria-describedby="inputGroup-sizing-sm"
  //       />
  //     </InputGroup>
  //     <br />
  //     <Card.Text className="text-center">
  //       <Button
  //         variant="dark"
  //         size="lg"
  //         type="submit"
  //         onClick={handleAdminPost}
  //       >
  //         Admin Login
  //       </Button>
  //     </Card.Text>
  //   </Card.Body>
  // </Card>
