import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUserHandler } from "../../../../services/apiConfigUser";
import { Form, Row } from "react-bootstrap";

export default function UserSignUpForm() {
  const [newUser, setNewUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validationMessage, setValidationMessage] = useState("");
  const [valid, setValid] = useState(false);
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpUserHandler(newUser);
    console.log(newUser);
    navigation("/login-user");
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    checkIfValid();
  }, [newUser.password, newUser.confirmPassword]);

  const checkIfValid = () => {
    if (newUser.password === "" || newUser.confirmPassword === "") {
      setValidationMessage("");
      setValid(false);
    } else if (newUser.password.length < 9) {
      setValidationMessage("Short password! Must be at least 8 characters");
    } else if (newUser.password !== newUser.confirmPassword) {
      setValidationMessage("Passwords must much!");
      setValid(false);
    } else {
      setValidationMessage("Password match!");
      setValid(true);
    }
  };

  return (
    <div className="signup-form">
      <Row>
        <Form onSubmit={handleSubmit}>
          <h4>{validationMessage}</h4>
          <br />
          <Form.Label>Username: </Form.Label>
          <Form.Control
            required
            autoFocus
            type="text"
            id="userName"
            placeholder="Create a Username"
            value={newUser.userName}
            onChange={handleInput}
          />
          <br />
          <Form.Label>First Name: </Form.Label>
          <Form.Control
            required
            type="text"
            id="firstName"
            placeholder="First Name"
            value={newUser.firstName}
            onChange={handleInput}
          />
          <br />
          <Form.Label>Last Name: </Form.Label>
          <Form.Control
            required
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={newUser.lastName}
            onChange={handleInput}
          />
          <br />
          <Form.Label>Email: </Form.Label>
          <Form.Control
            required
            type="text"
            id="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInput}
          />
          <br />
          <Form.Label>Password: </Form.Label>
          <Form.Control
            required
            type="text"
            id="password"
            placeholder="Create a password"
            value={newUser.password}
            onChange={handleInput}
          />
          <br />
          <Form.Label>Confirm Password: </Form.Label>
          <Form.Control
            required
            type="text"
            id="confirmPassword"
            placeholder="Confrim password"
            value={newUser.confirmPassword}
            onChange={handleInput}
          />
          <br />
          <button className="signup-btn">Sign In</button>
        </Form>
      </Row>
    </div>
  );
}
