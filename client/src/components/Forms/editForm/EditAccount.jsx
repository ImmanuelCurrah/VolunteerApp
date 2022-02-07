import { useState, useEffect } from "react";
import { Row, Form } from "react-bootstrap";
import { updateBusinessHandler } from "../../../services/apiConfigBusiness";
import { updateUserHandler } from "../../../services/apiConfigUser";
import { useNavigate } from "react-router-dom";

const user = localStorage.getItem("userName");
const business = localStorage.getItem("businessName");

let defaultInput = {};

if (user) {
  defaultInput = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
  };
} else {
  defaultInput = {
    userName: "",
    businessName: "",
    email: "",
  };
}

export default function EditAccount() {
  const [updatedData, setUpdatedData] = useState(defaultInput);

  const navigate = useNavigate();

  const setInputHandler = (e) => {
    const { id, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (user) {
      await updateUserHandler(updatedData, user);
      localStorage.setItem("userName", updatedData.userName);
      navigate("/account/user");
    } else {
      await updateBusinessHandler(updatedData, business);
      localStorage.setItem("businessName", updatedData.businessName);
      navigate("/account/business");
    }
  };

  return (
    <div>
      <div className="login-form">
        <Row>
          <Form onSubmit={submitHandler}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              autoFocus
              id="userName"
              type="text"
              placeholder="Username"
              onChange={setInputHandler}
            />
            <br />
            {user ? (
              <>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  autoFocus
                  id="firstName"
                  type="text"
                  placeholder="Name"
                  onChange={setInputHandler}
                />
                <br />
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  autoFocus
                  id="lastName"
                  type="text"
                  placeholder="Name"
                  onChange={setInputHandler}
                />
              </>
            ) : (
              <>
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                  required
                  autoFocus
                  id="businessName"
                  type="text"
                  placeholder="Business Name"
                  onChange={setInputHandler}
                />
              </>
            )}
            <br />
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              autoFocus
              id="email"
              type="text"
              placeholder="Email"
              onChange={setInputHandler}
            />
            <br />
            <button className="login-btn">Update</button>
          </Form>
        </Row>
      </div>
    </div>
  );
}
