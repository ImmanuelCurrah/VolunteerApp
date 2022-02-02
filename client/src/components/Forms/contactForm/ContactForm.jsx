import { useState } from "react";
import { createMessageHandler } from "../../../services/apiConfigContact";
import { Row, Form } from "react-bootstrap";

const defaultMessage = {
  email: "",
  name: "",
  message: "",
};

export default function ContactForm() {
  const [message, setMessage] = useState(defaultMessage);

  const messageHandler = (e) => {
    const { id, value } = e.target;
    setMessage((prevMessage) => ({
      ...prevMessage,
      [id]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newMessage = await createMessageHandler(message);
    console.log(newMessage);
    setMessage(defaultMessage);
  };

  return (
    <div className="login-form">
      <Row>
        <Form onSubmit={submitHandler}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            autoFocus
            type="email"
            className="form-control"
            id="email"
            value={message.email}
            onChange={messageHandler}
            placeholder="address@example.com"
          />
          <br />
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            className="form-control"
            id="name"
            value={message.name}
            onChange={messageHandler}
            placeholder="Name..."
          />
          <br />

          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            className="form-control"
            id="message"
            rows={3}
            id="message"
            value={message.message}
            onChange={messageHandler}
          />
          <br />
          <button className="login-btn">Send Message</button>
        </Form>
      </Row>
    </div>
  );
}
