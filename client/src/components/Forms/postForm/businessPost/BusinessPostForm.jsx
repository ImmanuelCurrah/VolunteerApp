import { useState, useEffect } from "react";
import {
  createBusinessPostHandler,
  findCurrentBusinessByNameHandler,
} from "../../../../services/apiConfigBusiness";
import { Row, Form } from "react-bootstrap";

export default function BusinessPostForm() {
  const [postData, setPostData] = useState({
    title: "",
    numberOfVolunteers: 0,
    eventDetails: "",
  });
  const [id, setId] = useState("");

  const businessName = localStorage.getItem("businessName");

  useEffect(() => {
    const fetchCurrentUser = async () => {
      let business = await findCurrentBusinessByNameHandler(businessName);
      console.log(businessName);
    };
    fetchCurrentUser();
  }, []);

  const setPostDataHandler = (e) => {
    const { id, value } = e.target;
    setPostData((prevPostData) => ({
      ...prevPostData,
      [id]: [value],
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const post = await createBusinessPostHandler(postData, id);
      console.log(post);
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="login-form">
      <Row>
        <Form onSubmit={submitHandler}>
          <Form.Label>Title of Event</Form.Label>
          <br />
          <Form.Control
            type="text"
            id="title"
            value={postData.title}
            placeholder="Name your event..."
            onChange={setPostDataHandler}
          />
          <br />
          <Form.Label>Volunteers Needed</Form.Label>
          <br />
          <Form.Control
            type="number"
            id="numberOfVolunteers"
            value={postData.numberOfVolunteers}
            placeholder="How many volunteers..."
            onChange={setPostDataHandler}
          />
          <br />
          <Form.Label>Event Details</Form.Label>
          <br />
          <Form.Control
            type="text"
            id="eventDetails"
            value={postData.eventDetails}
            placeholder="Description..."
            onChange={setPostDataHandler}
          />
          <button className="login-btn">Post Event</button>
        </Form>
      </Row>
    </div>
  );
}
