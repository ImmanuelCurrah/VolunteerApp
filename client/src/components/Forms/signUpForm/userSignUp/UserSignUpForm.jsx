import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signUpUserHandler } from '../../../../services/apiConfigUser';
import { Form, Row } from 'react-bootstrap';

export default function UserSignUpForm() {
  const [hidePassword, setHidePassword] = useState('password');
  const [showPassword, setShowPassword] = useState('text');
  const [newUser, setNewUser] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validationMessage, setValidationMessage] = useState('');
  const [valid, setValid] = useState(false);
  const navigation = useNavigate();

  const toggleShowPassword = (e) => {
    let x = hidePassword;
    setHidePassword(showPassword);
    setShowPassword(x);
  };

  // function that handles the submission of the sign up form
  // signUpUserHandler imported from api config/the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpUserHandler(newUser);

    navigation('/login-users');
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // useEffect for checkIfValid function
  useEffect(() => {
    checkIfValid();
    // eslint-disable-next-line
  }, [newUser.password, newUser.confirmPassword]);

  // this funciton checks to see if password is valid. i.e 8 or more characters, confirm password matches password
  const checkIfValid = () => {
    if (newUser.password === '' || newUser.confirmPassword === '') {
      setValidationMessage('');
      setValid(false);
    } else if (newUser.password.length < 9) {
      setValidationMessage('Short password! Must be at least 8 characters');
    } else if (newUser.password !== newUser.confirmPassword) {
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
            type={hidePassword}
            id="password"
            placeholder="Create a password"
            value={newUser.password}
            onChange={handleInput}
          />
          <br />
          <Form.Label>Confirm Password: </Form.Label>
          <Form.Control
            required
            type={hidePassword}
            id="confirmPassword"
            placeholder="Confirm password"
            value={newUser.confirmPassword}
            onChange={handleInput}
          />
          <br />
          <Form.Check
            type="switch"
            label="Show Password"
            onClick={(e) => toggleShowPassword(e)}
          />

          <button className="signup-btn">Sign in</button>
        </Form>
      </Row>
      <div className="active-account">
        <h6>
          Already have an account? Login <Link to="/login-users">here</Link>
        </h6>
      </div>
    </div>
  );
}
