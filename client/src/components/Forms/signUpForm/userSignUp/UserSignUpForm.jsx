import { useEffect, useState } from "react";
import { Layout } from "../../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { signUpUserHandler } from "../../../../services/apiConfigUser";


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

  // handleSubmit function: signUpUserHandler?
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpUserHandler(newUser);
    console.log(newUser);
    // navigation("/login");
  }

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
      <div className="user-signup-container">
        <form className="user-signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up!</h2>
          <h4>{validationMessage}</h4>
          <br />
          <label>Username: </label>
          <input
            type="text"
            placeholder="Create a Username"
            value={newUser.userName}
            onChange={handleInput}
          />
          <br/>
          <label>First Name: </label>
          <input
            type="text"
            placeholder="First Name"
            value={newUser.firstName}
            onChange={handleInput}
          />
          <br/>
          <label>Last Name: </label>
          <input
            type="text"
            placeholder="Last Name"
            value={newUser.lastName}
            onChange={handleInput}
          />
          <br/>
          <label>Email: </label>
          <input
            type="text"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInput}
          />
          <br/>
          <label>Password: </label>
          <input
            type="text"
            placeholder="Create a password"
            value={newUser.password}
            onChange={handleInput}
          />
          <br/>
          <label>Confirm Password: </label>
          <input
            type="text"
            placeholder="Confrim password"
            value={newUser.confirmPassword}
            onChange={handleInput}
          />
          <br />
          {/* signup button? */}
        </form>
      </div>
  )
}
