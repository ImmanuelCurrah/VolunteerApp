import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUserHandler } from '../../../services/apiConfigUser/index.js';
import UserLoginForm from '../../../components/Forms/loginForm/userLogin/UserLoginForm';
import './UserLogin.css';

const login_input = {
  email: '',
  password: '',
};

const URL = 'https://volunteer-app-project.herokuapp.com/api/';

export default function UserLogin() {
  const [userInput, setUserInput] = useState(login_input);

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [id]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      //     // const res = await loginUserHandler();
      //     // const value = res.data.data.user;
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-login-page">
      <h2>Volunteer Login</h2>
      <UserLoginForm
        userInput={userInput}
        handleLoginChange={handleLoginChange}
        handleLoginSubmit={handleLoginSubmit}
      />
    </div>
  );
}