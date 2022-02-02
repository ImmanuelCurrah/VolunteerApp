import React from 'react';
import { Row, Form } from 'react-bootstrap';

export default function BusinessLoginForm(props) {
  // const { email, password } = props.businessInput;

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
            value={props.email}
            placeholder="Email"
            onChange={props.handleLoginChange}
          />
          <br />

          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            id="password"
            type="password"
            value={props.password}
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
