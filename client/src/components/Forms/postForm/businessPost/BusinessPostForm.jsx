import { useState, useEffect } from "react";
import {
  createBusinessPostHandler,
  findCurrentBusinessByNameHandler,
} from "../../../../services/apiConfigBusiness";
import { useNavigate } from "react-router-dom";
import { Row, Form } from "react-bootstrap";

export default function BusinessPostForm() {
  const [postData, setPostData] = useState({
    event: "",
    numberNeeded: "",
    content: "",
  });
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const businessName = localStorage.getItem("businessName");
  const token = localStorage.getItem("businessToken");

  useEffect(() => {
    const fetchCurrentUser = async () => {
      let business = await findCurrentBusinessByNameHandler(
        token,
        businessName
      );
      setId(business.data.data._id);
    };
    fetchCurrentUser();
    // eslint-disable-next-line
  }, []);

  const setPostDataHandler = (e) => {
    const { id, value } = e.target;
    setPostData((prevPostData) => ({
      ...prevPostData,
      [id]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createBusinessPostHandler(postData, id);
      navigate("/all-posts");
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
            id="event"
            value={postData.event}
            placeholder="Name your event..."
            onChange={setPostDataHandler}
          />
          <br />
          <Form.Label>Volunteers Needed</Form.Label>
          <br />
          <Form.Control
            type="number"
            id="numberNeeded"
            value={postData.numberNeeded}
            placeholder="How many volunteers..."
            onChange={setPostDataHandler}
          />
          <br />
          <Form.Label>Event Details</Form.Label>
          <br />
          <Form.Control
            type="text"
            id="content"
            value={postData.content}
            placeholder="Description..."
            onChange={setPostDataHandler}
          />
          <button className="login-btn">Post Event</button>
        </Form>
      </Row>
    </div>
  );
}
