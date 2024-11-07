import React, { Component } from "react";
import { Nav, Navbar, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../../static/navbar.css";
export class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Navbar dark expand="md" id="sidenav">
        {/* <NavbarToggler onClick={this.toggleNav} /> */}
        <Collapse isOpen={this.state.isNavOpen} navbar>
          <Nav vertical>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                Add Order
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                Add City
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/menu">
                Add Price
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Menu;
