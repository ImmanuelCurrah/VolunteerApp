import { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";

export default function PostLoginNav() {
  const [endPoint, setEndPoint] = useState("");

  const userName = localStorage.getItem("userName");

  useEffect(() => {
    if (userName) {
      setEndPoint("user");
    } else {
      setEndPoint("business");
    }
  }, []);

  return (
    <div className="post-login-nav">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="light"
        variant="light"
        fixed="top"
      >
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="/" className="Nav-header">
            VolunteerApp
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto"></ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link href={`/account/${endPoint}`}>
                Account Page
              </ReactBootStrap.Nav.Link>
              {userName ? null : (
                <ReactBootStrap.Nav.Link
                  eventKey={2}
                  href="/create-post-business"
                >
                  Post Business Ad
                </ReactBootStrap.Nav.Link>
              )}
              <ReactBootStrap.Nav.Link href="/about-us">
                About Us
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/contact-us">
                Contact Us
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}
