import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Nav.css";

export default function LoginNavBar() {
  return (
    <div className="navbar-login">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        variant="dark"
        fixed="top"
        className="color-nav"
      >
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="/">
            VolunteerApp
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.NavDropdown title="Login" id="basic-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item>
                  <Link to="/login-users">Volunteer Login</Link>
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item>
                  <Link to="/login-business">Business Login</Link>
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown
                title="Signup"
                id="basic-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item>
                  <Link to="/sign-up-user">Volunteer Signup</Link>
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item>
                  <Link to="/sign-up-business">Business Signup</Link>
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}
