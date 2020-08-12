import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function AddUser(props) {
  const [user, setUser] = useState({});

  function handleRegister(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleRegisterPost() {
    fetch("https://react-redux-bookstore-server.herokuapp.com/register", {
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
    <>
      <Card>
        <Card.Header className="text-center" as="h1">
          Registration Page
        </Card.Header>
        <Card.Body>
          <InputGroup size="lg">
            <FormControl
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleRegister}
              required
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <FormControl
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleRegister}
              required
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <br />
          <Card.Text className="text-center">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              onClick={handleRegisterPost}
            >
              Register User
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default AddUser;
