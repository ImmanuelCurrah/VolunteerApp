import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpBusinessHandler } from '../../../../services/apiConfigBusiness';
import { Form, Row } from 'react-bootstrap';

export default function BusinessSignUpForm() {
  const [newBusiness, setNewBusiness] = useState({
    userName: '',
    businessName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validationMessage, setValidationMessage] = useState('');
  const [valid, setValid] = useState(false);
  const navigation = useNavigate();

  // function that handles the submission of the sign up form
  // signUpBusinessHandler imported from api config/the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpBusinessHandler(newBusiness);
    console.log(newBusiness);
    navigation('/login-business');
  };

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

  // this funciton checks to see if password is valid. i.e 8 or more characters, confirm password matches password
  const checkIfValid = () => {
    if (newBusiness.password === '' || newBusiness.confirmPassword === '') {
      setValidationMessage('');
      setValid(false);
    } else if (newBusiness.password.length < 9) {
      setValidationMessage('Short password! Must be at least 8 characters');
    } else if (newBusiness.password !== newBusiness.confirmPassword) {
      setValidationMessage('Passwords must much!');
      setValid(false);
    } else {
      setValidationMessage('Password match!');
      setValid(true);
    }
  };

  // bootstrap used for the form that is returned
  // validation message shows up at the top of the form
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
            value={newBusiness.userName}
            onChange={handleInput}
          />
          <br />
          <Form.Label>Business Name: </Form.Label>
          <Form.Control
            required
            type="text"
            id="businessName"
            placeholder="Business Name"
            value={newBusiness.businessName}
            onChange={handleInput}
          />
          <br />
          <Form.Label>Email: </Form.Label>
          <Form.Control
            required
            type="text"
            id="email"
            placeholder="Email"
            value={newBusiness.email}
            onChange={handleInput}
          />
          <br />
          <Form.Label>Password: </Form.Label>
          <Form.Control
            required
            type="password"
            id="password"
            placeholder="Create a password"
            value={newBusiness.password}
            onChange={handleInput}
          />
          <br />
          <Form.Label>Confirm Password: </Form.Label>
          <Form.Control
            required
            type="password"
            id="confirmPassword"
            placeholder="Confrim password"
            value={newBusiness.confirmPassword}
            onChange={handleInput}
          />
          <br />
          <button className="signup-btn">Sign In</button>
        </Form>
      </Row>
    </div>
  );
}
