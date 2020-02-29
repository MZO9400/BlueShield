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
  Media,
  Button
} from "reactstrap";
import Logo from "../../Images/logo-text-v2.png";
import LogoBlue from "../../Images/logo.png";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions";
import CSS from "./NavBar.module.css";

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    displayName: state.displayName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkLogStatus: () => dispatch(actions.checkLogStatus())
  };
};
class NavBar extends React.Component {
  state = {
    isDropDownOpen: false,
    isPlansOpen: false
  };
  blueBG = () => {
    const blueBackgroundArr = [
      "/",
      "/life-insurance",
      "/group-insurance",
      "/compare-plans",
      "/profile"
    ];
    if (blueBackgroundArr.indexOf(this.props.location.pathname) !== -1)
      return true;
    return false;
  };
  isResults = () => this.props.location.pathname === "/results";
  onDDToggle = () =>
    this.setState(state => {
      return { isDropDownOpen: !state.isDropDownOpen };
    });
  onPlansToggle = () =>
    this.setState(state => {
      return { isPlansOpen: !state.isPlansOpen };
    });
  componentDidMount() {
    this.props.checkLogStatus();
  }
  render() {
    let nav = null;
    if (!(this.props.location.pathname.search("/compare/") === 0))
      nav = (
        <Nav className={[CSS.navbar, "mr-auto"].join(" ")} navbar>
          {!this.isResults() && (
            <React.Fragment>
              <NavItem>
                <Link
                  to="/"
                  className={[this.blueBG() ? CSS.blueBG : "", "nav-link"].join(
                    " "
                  )}
                >
                  Home
                </Link>
              </NavItem>
              <ButtonDropdown
                isOpen={this.state.isPlansOpen}
                toggle={this.onPlansToggle}
              >
                <DropdownToggle
                  color="link"
                  className={[
                    this.blueBG() ? CSS.blueBG : "",
                    CSS.ContactUsButton
                  ].join(" ")}
                >
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
                <Link
                  to="/about"
                  className={[this.blueBG() ? CSS.blueBG : "", "nav-link"].join(
                    " "
                  )}
                >
                  About
                </Link>
              </NavItem>
            </React.Fragment>
          )}
          <ButtonDropdown
            isOpen={this.state.isDropDownOpen}
            toggle={this.onDDToggle}
          >
            <DropdownToggle
              color="link"
              className={[
                this.blueBG() ? CSS.blueBG : "",
                CSS.ContactUsButton
              ].join(" ")}
            >
              Contact Us
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>WHATSAPP</DropdownItem>
              <DropdownItem>+92 333 1210707</DropdownItem>
              <DropdownItem>Chat with us</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </Nav>
      );
    return (
      <Navbar className={CSS.navbarMain} expand="md">
        <NavbarBrand>
          <Media
            src={this.blueBG() ? LogoBlue : Logo}
            alt="Test site"
            object
            style={{ height: "3em", padding: "0.3em", cursor: "pointer" }}
            onClick={() => this.props.history.push("/")}
          />
        </NavbarBrand>
        <Collapse isOpen={true} navbar>
          {nav}
          <Nav className={[CSS.navbar, "ml-auto"].join(" ")} navbar>
            <NavItem>
              <Button
                className={CSS.button}
                onClick={() =>
                  this.props.loggedIn
                    ? this.props.history.push("/profile")
                    : this.props.history.push("/Login")
                }
              >
                {this.props.loggedIn ? this.props.displayName : "Login"}
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));
