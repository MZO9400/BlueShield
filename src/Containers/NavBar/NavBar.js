import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media
} from "reactstrap";
import Logo from "../../Images/logo-text-v2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSS from "./NavBar.module.css";

class NavBar extends React.Component {
  state = {
    isDropDownOpen: false,
    isPlansOpen: false
  };
  onDDToggle = () =>
    this.setState(state => {
      return { isDropDownOpen: !state.isDropDownOpen };
    });
  onPlansToggle = () =>
    this.setState(state => {
      return { isPlansOpen: !state.isPlansOpen };
    });
  render() {
    return (
      <Navbar
        style={{
          backgroundColor: "#66ffe0",
          height: "10%",
          display: "flex"
        }}
        expand="md"
      >
        <NavbarBrand>
          <Media
            src={Logo}
            alt="Test site"
            object
            style={{ height: "3em", padding: "0.3em" }}
          />
        </NavbarBrand>
        <Collapse isOpen={true} navbar>
          <Nav className={[CSS.navbar, "mr-auto"].join(" ")} navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <ButtonDropdown
              isOpen={this.state.isPlansOpen}
              toggle={this.onPlansToggle}
            >
              <DropdownToggle color="link" className={CSS.ContactUsButton}>
                Plans
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Health</DropdownItem>
                <DropdownItem>Car</DropdownItem>
                <DropdownItem>Travel</DropdownItem>
                <DropdownItem>Life</DropdownItem>
                <DropdownItem>Company</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
          </Nav>
          <Nav className={[CSS.navbar, "ml-auto"].join(" ")} navbar>
            <ButtonDropdown
              isOpen={this.state.isDropDownOpen}
              toggle={this.onDDToggle}
            >
              <DropdownToggle
                caret
                color="link"
                className={CSS.ContactUsButton}
              >
                Contact Us
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>WHATSAPP</DropdownItem>
                <DropdownItem>+92 333 1210707</DropdownItem>
                <DropdownItem>Chat with us</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <NavItem>
              <NavLink href="#">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
