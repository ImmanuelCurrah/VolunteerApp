import React from 'react';
import { Row, Form } from 'react-bootstrap';

export default function UserLoginForm(props) {
  return (
    <div className="user-login-form">
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
            onChange={props.handleTextInput}
          />
          <br />

          <Form.Label>Type</Form.Label>
          <Form.Control
            required
            id="password"
            type="password"
            value={props.password}
            placeholder="password"
            onChange={props.handleTextInput}
          />
          <br />
          <button className="login-btn">Login</button>
        </Form>
      </Row>
    </div>
  );
}
