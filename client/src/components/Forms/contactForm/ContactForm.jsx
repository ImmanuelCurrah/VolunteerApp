import { useState } from "react";
import { createMessageHandler } from "../../../services/apiConfigContact";

export default function ContactForm() {
  const [message, setMessage] = useState({
    email: "",
    name: "",
    message: "",
  });

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
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={message.email}
          onChange={messageHandler}
          placeholder="address@example.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={message.name}
          onChange={messageHandler}
          placeholder="Name..."
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          id="message"
          value={message.message}
          onChange={messageHandler}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary mb-3">Send Message</button>
      </div>
    </form>
  );
}
