import { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Nav.css";

export default function PostLoginNav() {
  const [endPoint, setEndPoint] = useState("");

  const userName = localStorage.getItem("userName");
  const businessName = localStorage.getItem("businessName");

  useEffect(() => {
    if (userName) {
      setEndPoint("user");
    } else {
      setEndPoint("business");
    }
    // eslint-disable-next-line
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userToken");
    localStorage.removeItem("businessName");
    localStorage.removeItem("businessToken");
  };
  return (
    <div className="post-login-nav">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        variant="dark"
        fixed="top"
        className="color-nav"
      >
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="/" className="Nav-header">
            VolunteerApp
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto"></ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link>
                <Link className="link-two" to={`/account/${endPoint}`}>
                  Account Page
                </Link>
              </ReactBootStrap.Nav.Link>
              {userName ? null : (
                <ReactBootStrap.Nav.Link eventKey={2}>
                  <Link className="link-two" to="/create-post-business">
                    Post Business Ad
                  </Link>
                </ReactBootStrap.Nav.Link>
              )}
              <ReactBootStrap.Nav.Link>
                <Link className="link-two" to="/about-us">
                  About Us
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="">
                <Link className="link-two" to="/contact-us">
                  Contact Us
                </Link>
              </ReactBootStrap.Nav.Link>
              {userName || businessName ? (
                <ReactBootStrap.Nav.Link eventKey={2}>
                  <Link className="link-two" to="/" onClick={logoutHandler}>
                    Logout
                  </Link>
                </ReactBootStrap.Nav.Link>
              ) : null}
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}
