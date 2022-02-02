import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomepageAccordian() {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sign Up</Accordion.Header>
          <Accordion.Body>
            <div className="signup-link-div">
              <ul>
                <li>
                  <Link to="/sign-up-business">Business Sign Up</Link>
                </li>
                <li>
                  <Link to="/sign-up-user">Volunteer Sign Up</Link>
                </li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Login</Accordion.Header>
          <Accordion.Body>
            <div className="login-link-div">
              <ul>
                <li>
                  <Link to="/login-business">Business Login</Link>
                </li>
                <li>
                  <Link to="/login-users">Volunteer Login</Link>
                </li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
