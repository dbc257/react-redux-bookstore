import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./logo-bootstrap.svg";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        {props.isLoggedIn ? (
          <Button variant="dark">
            <NavDropdown title="Filter By Genre" id="basic-nav-dropdown">
              <LinkContainer to="/Fiction">
                <NavDropdown.Item>Fiction</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Nonfiction">
                <NavDropdown.Item>Nonfiction</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/AllGenres">
                <NavDropdown.Item>View All Genres</NavDropdown.Item>
              </LinkContainer>
              {/* <NavDropdown.Divider />
            <LinkContainer to="/">
              <NavDropdown.Item>View All Genres</NavDropdown.Item>
            </LinkContainer> */}
            </NavDropdown>
          </Button>
        ) : null}
        {/* <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer> */}
        {props.isAdmin ? (
          <LinkContainer to="/Admin">
            <Nav.Link>
              <Button variant="dark">Admin</Button>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <LinkContainer to="/">
            <Nav.Link>
              <Button variant="dark">Home</Button>
            </Nav.Link>
          </LinkContainer>
        )}
        {props.isAdmin ? (
          <LinkContainer to="/AddBook">
            <Nav.Link>
              <Button variant="dark">Add Book</Button>
            </Nav.Link>
          </LinkContainer>
        ) : null}
        {props.isLoggedIn ? null : (
          <LinkContainer to="/Login">
            <Nav.Link>
              <Button variant="dark">Login</Button>
            </Nav.Link>
          </LinkContainer>
        )}
        {/* {props.isLoggedIn ? null : (
          <LinkContainer to="/Register">
            <Nav.Link>Add User</Nav.Link>
          </LinkContainer>
        )} */}
        {/* <Button
                            variant="link"
                            size="sm"
                            onClick={this.handleSignOut}
                            className="nav-link"
                          >
                            <a className="nav-link">Signout</a>
                          </Button> */}
        {props.isLoggedIn ? (
          <LinkContainer to="/Signout">
            <Nav.Link>
              <Button variant="dark">Signout</Button>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <LinkContainer to="/Register">
            <Nav.Link>
              <Button variant="dark">Register</Button>
            </Nav.Link>
          </LinkContainer>
        )}
      </Nav>
      {props.isLoggedIn ? (
        <LinkContainer to="/Cart">
          <Button variant="outline-info">
            Cart
            <Badge>{props.counter}</Badge>
            <span className="sr-only">items in cart</span>
          </Button>
        </LinkContainer>
      ) : null}
      {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdmin: state.adminRed.isAdmin,
    isLoggedIn: state.loginRed.isLoggedIn,
    counter: state.counterRed.counter,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAuthenticated: () => dispatch(actionCreators.authenticated(false)),
//     onAdministrator: () => dispatch(actionCreators.administrator(false)),
//   };
// };
export default connect(mapStateToProps, null)(Header);

// {props.isLoggedIn ?<LinkContainer to="/Home">
//     <Nav.Link>Home</Nav.Link>
//   </LinkContainer>:<LinkContainer to="/">
// <Nav.Link>Home</Nav.Link>
// </LinkContainer>}
// {props.isLoggedIn ? <h1>Logged In</h1> : <h1>Not Logged In</h1>}

// import * as actionCreators from "../store/creators/actionCreators";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import NavbarBrand from "react-bootstrap/NavbarBrand";
// import "./App.css";
// import logo from "./logo.svg";
// import { NavLink } from "react-router-dom";
