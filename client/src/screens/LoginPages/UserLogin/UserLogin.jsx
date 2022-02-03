import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUserHandler } from '../../../services/apiConfigUser/index.js';
import UserLoginForm from '../../../components/Forms/loginForm/userLogin/UserLoginForm';
import '../Login.css';
import { Layout } from '../../../components/Layout/Layout.jsx';

const login_input = {
  email: '',
  password: '',
};

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
      const res = await loginUserHandler(userInput);
      localStorage.setItem('userToken', res.data.data.token);
      localStorage.setItem('userName', res.data.data.user.userName);
      setUserInput(login_input);
      navigate('/account/user');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="login-page">
        <h2>Volunteer Login</h2>
        <UserLoginForm
          userInput={userInput}
          handleLoginChange={handleLoginChange}
          handleLoginSubmit={handleLoginSubmit}
        />
      </div>
    </Layout>
  );
}
