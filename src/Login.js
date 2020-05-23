import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import phoneImage from "./phone-image.png";
import { BsArrowLeftShort } from "react-icons/bs";
import axios from "axios";

function Login() {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [emailStatus, setemailStatus] = useState(false);
  const [response, setreponse] = useState("");

  function callAPI() {
    axios.post("https://localhost:8080/authenticate").then((res) => {
      setreponse(res);
    });
  }

  function emailVerification(e) {
    let inp = e.target.value;
    if (
      inp.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setemail(inp);
      setemailStatus(true);
    } else {
      setemailStatus(false);
    }
  }

  function startLearning() {
    if (fullname && email && emailStatus) {
      alert("name : " + fullname + " email : " + email);
      setfullname("");
      setemail("");
      setemailStatus("");
    } else {
      alert("fill all fields");
    }
  }

  return (
    <div
      className="login"
      style={{
        backgroundImage: "linear-gradient(rgb(8, 0, 55), rgb(79, 0, 96))",
        height: "100vh",
      }}
    >
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link
            style={{ marginLeft: "35%", marginRight: "5%", marginTop: "1%" }}
          >
            Features
          </Nav.Link>
          <NavDropdown
            title="Solutions"
            id="basic-nav-dropdown"
            style={{ marginRight: "5%", marginTop: "1%" }}
          >
            <NavDropdown.Item href="#">Item List 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Item List 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Item List 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link style={{ marginRight: "5%", marginTop: "1%" }}>
            Client Success
          </Nav.Link>
          <NavDropdown
            title="Resources"
            id="basic-nav-dropdown"
            style={{ marginRight: "5%", marginTop: "1%" }}
          >
            <NavDropdown.Item href="#">Item List 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Item List 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Item List 3</NavDropdown.Item>
          </NavDropdown>
          <Button
            style={{
              borderColor: "black",
              marginTop: "1%",
              borderRadius: "3px",
              backgroundColor: "#f4511e",
              width: "10%",
              height: "5%",
            }}
          >
            Schedule a demo
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <div
        className="login-message"
        style={{ marginTop: "10%", marginLeft: "10%" }}
      >
        <h1 style={{ color: "#f4511e", fontWeight: "800", fontSize: "45px" }}>
          Learn a Microskill® for FREE!
        </h1>
        <h6 style={{ color: "white", fontWeight: "300", fontSize: "20px" }}>
          Experience Master-O & get a chance to earn LinkedIn certificate
          absolutely free!
        </h6>
        <br />
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label style={{ color: "white" }}>Full name :</Form.Label>
            <Form.Control
              type="text"
              style={{
                backgroundColor: "#f7f7f70d",
                width: "20%",
                color: "white",
              }}
              onChange={(e) => {
                setfullname(e.target.value);
              }}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: "white" }}>E-Mail Address :</Form.Label>
            <Form.Control
              type="email"
              style={{
                backgroundColor: "#f7f7f70d",
                width: "20%",
                color: "white",
              }}
              onChange={emailVerification}
            />
          </Form.Group>
          <br />
          <br />
          <Button
            style={{
              borderColor: "black",
              borderRadius: "3px",
              backgroundColor: "#f4511e",
            }}
            onClick={startLearning}
          >
            Start Learning
          </Button>
        </Form>
        <br />
        <br />
        <br />
        <Link to="/" style={{ color: "white", float: "left" }}>
          <BsArrowLeftShort />
          Back to home page
        </Link>
        <img
          src={phoneImage}
          alt="logo"
          style={{
            width: "15%",
            height: "auto",
            right: "12%",
            top: "25%",
            position: "fixed",
          }}
        />
      </div>
    </div>
  );
}

export default Login;
