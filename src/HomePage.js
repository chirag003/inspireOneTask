import React from "react";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import phoneImage from "./phone-image.png";
import google from "./google.png";
import apple from "./apple.png";

function HomePage() {
  return (
    <div
      className="homepage"
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
        className="homepage-message"
        style={{ marginTop: "16%", marginLeft: "10%" }}
      >
        <h2 style={{ color: "white", fontWeight: "600", fontSize: "35px" }}>
          Improve sales enablement,
        </h2>
        <h1 style={{ color: "white", fontWeight: "800", fontSize: "45px" }}>
          Effortlessly
        </h1>
        <h6 style={{ color: "white", fontWeight: "300", fontSize: "20px" }}>
          With mobile games built around engaging learning content
        </h6>
      </div>
      <Button
        href="/login"
        style={{
          borderColor: "black",
          marginLeft: "10%",
          marginTop: "2%",
          borderRadius: "3px",
          backgroundColor: "#f4511e",
          width: "8%",
          height: "5%",
          fontSize: 10,
          textAlign: "center",
        }}
      >
        Try FREE Microskill
      </Button>
      <div>
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
      <div>
        <img
          src={google}
          alt="google"
          style={{ marginTop: "1%", marginLeft: "10%", width: "100px" }}
        />
        <img
          src={apple}
          alt="apple"
          style={{ marginTop: "1%", marginLeft: "1%", width: "100px" }}
        />
      </div>
    </div>
  );
}

export default HomePage;
