import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media
} from "reactstrap";
import Logo from "../../Images/logo-text-v2.png";
import { Link, withRouter } from "react-router-dom";
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
      <Navbar className={CSS.navbarMain} expand="md">
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <ButtonDropdown
              isOpen={this.state.isPlansOpen}
              toggle={this.onPlansToggle}
            >
              <DropdownToggle color="link" className={CSS.ContactUsButton}>
                Plans
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/health-insurance" className="nav-link">
                    Health
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/car-insurance" className="nav-link">
                    Car
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/travel-insurance" className="nav-link">
                    Travel
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/life-insurance" className="nav-link">
                    Life
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/group-insurance" className="nav-link">
                    Company
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
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
              <Link to="/Login" className="nav-link">
                Login
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
export default withRouter(NavBar);
