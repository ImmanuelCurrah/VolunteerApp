import { useState } from 'react';
import { Row, Form } from 'react-bootstrap';

export default function BusinessLoginForm(props) {
  const [hidePassword, setHidePassword] = useState('password');
  const [showPassword, setShowPassword] = useState('text');

  const { email, password } = props.businessInput;

  const toggleShowPassword = (e) => {
    let x = hidePassword;
    setHidePassword(showPassword);
    setShowPassword(x);
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
    </div>
  );
}
