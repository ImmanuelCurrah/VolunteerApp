import { useState } from 'react';
import { Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UserLoginForm(props) {
  const [hidePassword, setHidePassword] = useState('password');
  const [showPassword, setShowPassword] = useState('text');
  const [showGuest, setShowGuest] = useState(false);

  const { email, password } = props.userInput;

  const toggleShowPassword = (e) => {
    let x = hidePassword;
    setHidePassword(showPassword);
    setShowPassword(x);
  };

  // show guest login div
  const showguestLogin = () => {
    setShowGuest((prevShowGuest) => !prevShowGuest);
  };

  return (
    <div className="login-form">
      <Row>
        <Form onSubmit={props.handleLoginSubmit}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            autoFocus
            id="email"
            type="text"
            value={email}
            placeholder="Email"
            onChange={props.handleLoginChange}
          />
          <br />

          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            id="password"
            type={hidePassword}
            value={password}
            placeholder="password"
            onChange={props.handleLoginChange}
          />
          <br />
          <Form.Check
            type="switch"
            label="Show Password"
            onClick={(e) => toggleShowPassword(e)}
          />

          <button className="login-btn">Login</button>
        </Form>
      </Row>
      <div className="no-account">
        <h6>
          Don't have an account? Sign up <Link to="/sign-up-user">here</Link>
        </h6>
      </div>

      <button onClick={showguestLogin}>Login as Guest</button>

      {showGuest && (
        <div className="guestlogin">
          <span>
            <strong>Email: </strong>
            <em>guestuseraccount@test.com</em>
          </span>
          <span>
            <strong>Password: </strong>
            <em>password</em>
          </span>
        </div>
      )}
    </div>
  );
}
