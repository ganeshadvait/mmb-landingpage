import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import image from "../img/logo.png";
import { Link } from "react-router-dom";

function Example(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="mobile-menu">
      <Navbar color="faded" dark style={{ textAlign: "left", color: "white" }}>
        <NavbarBrand href="/" className="me-auto">
          <img
            src={image}
            width="200"
            alt="Bike parcel/ Transport / Shipping"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <Link
              to="/home"
              style={{
                color: "white",
                textDecoration: "none",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                color: "white",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              style={{
                color: "white",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              Contact Us
            </Link>
            <Link
              to="/Ournetwork"
              style={{
                color: "white",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              Our Network
            </Link>
            <Link
              to="/resources"
              style={{
                color: "white",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              Resources
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
