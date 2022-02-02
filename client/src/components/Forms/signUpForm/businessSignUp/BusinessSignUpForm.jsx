import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpBusinessHandler } from "../../../../services/apiConfigBusiness";


export default function BusinessSignUpForm() {

  const [newBusiness, setNewBusiness] = useState({
    userName: "",
    businessName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validationMessage, setValidationMessage] = useState("");
  const [valid, setValid] = useState(false);
  const navigation = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpBusinessHandler(newBusiness);
    console.log(newBusiness);
    navigation("/login-business");
  }

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewBusiness((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    checkIfValid();
  }, [newBusiness.password, newBusiness.confirmPassword]);

  const checkIfValid = () => {
    if (newBusiness.password === "" || newBusiness.confirmPassword === "") {
      setValidationMessage("");
      setValid(false);
    } else if (newBusiness.password.length < 9) {
      setValidationMessage("Short password! Must be at least 8 characters");
    } else if (newBusiness.password !== newBusiness.confirmPassword) {
      setValidationMessage("Passwords must much!");
      setValid(false);
    } else {
      setValidationMessage("Password match!");
      setValid(true);
    }
  };

  return (
      <div className="business-signup-container">
        <form className="business-signup-form" onSubmit={handleSubmit}>
          <h2>Sign up your business!</h2>
          <h4>{validationMessage}</h4>
          <br />
          <label>Username: </label>
          <input
            type="text"
            id="userName"
            placeholder="Create a Username"
            value={newBusiness.userName}
            onChange={handleInput}
          />
          <br/>
          <label>Business Name: </label>
          <input
            type="text"
            id="businessName"
            placeholder="Business Name"
            value={newBusiness.businessName}
            onChange={handleInput}
          />
          <br/>
          <label>Email: </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={newBusiness.email}
            onChange={handleInput}
          />
          <br/>
          <label>Password: </label>
          <input
            type="text"
            id="password"
            placeholder="Create a password"
            value={newBusiness.password}
            onChange={handleInput}
          />
          <br/>
          <label>Confirm Password: </label>
          <input
            type="text"
            id="confirmPassword"
            placeholder="Confrim password"
            value={newBusiness.confirmPassword}
            onChange={handleInput}
          />
          <br />
          {/* signup button? */}
        </form>
      </div>
  )
}
