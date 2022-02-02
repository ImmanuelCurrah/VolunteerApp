import * as ReactBootStrap from 'react-bootstrap';

export default function LoginNavBar() {
  return (
    <div className="navbar-login">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="light"
        variant="light"
        fixed="top"
      >
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
            Volunteer App
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.NavDropdown title="Login" id="basic-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  Volunteer Login
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Business Login
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown
                title="Signup"
                id="basic-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  Volunteer Signup
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Business Signup
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}
