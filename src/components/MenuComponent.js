import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink , Link } from "react-router-dom";
import image from "../img/logo.png";
import bikeicon from '../img/transport bike icon.png'

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
      <>
      <Navbar dark expand="md" id="main-nav">
        <NavbarBrand className="mr-auto" href="/">
          <img
            src={image}
            width="200"
            alt="Bike parcel/ Transport / Shipping"
          />
        </NavbarBrand>
        <NavbarToggler
          onClick={this.toggle}
          style={{ position: "absolute", right: "10px" }}
        />
        <Collapse isOpen={this.state.isNavOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" to="/resources">
                Resources
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Our Network
                </DropdownToggle>
                <DropdownMenu right style={{boxShadow: '1px 5px 11px 0px #222'}}>
                  <DropdownItem tag={Link} to="/Ournetwork">
                    All Locations
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/hyderabad">
                    Hyderabad
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/bangalore">
                    Bangalore
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/pune">
                    Pune
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/vizag">
                    Vizag
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/tirupathi">
                    Tirupathi
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/chennai">
                    Chennai
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/delhi">
                    Delhi
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/vijayawada">
                    Vijayawada
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      {/* <marquee behavior="scroll" direction="left" style={{backgroundColor:'#bb2d3b',color:"white",padding:"5px 10%",marginBottom:'-6px'}}><img src="https://cdn-icons-png.flaticon.com/512/1768/1768214.png" width='30px' style={{transform:'rotateY(180deg)'}} height='30px' alt="transport bike" />   CONTACT :<b> +91 9014044900 / 9063506008</b></marquee> */}
      <div class="icon-bar-wrap">
        <div class="icon-bar">
          <img src={bikeicon} width='100px' alt="transport bike" />
          <span class="contact-scroll">    CONTACT :<b> +91 9014044900 / 9063506008</b></span>
        </div>
      </div>
      </>
    );
  }
}

export default Menu;
