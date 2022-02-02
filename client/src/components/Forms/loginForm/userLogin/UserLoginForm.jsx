import React from 'react';
import { Row, Form } from 'react-bootstrap';

export default function UserLoginForm(props) {
  const { email, password } = props.userInput;

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
            type="password"
            value={password}
            placeholder="password"
            onChange={props.handleLoginChange}
          />
          <br />
          <button className="login-btn">Login</button>
        </Form>
      </Row>
    </div>
  );
}
