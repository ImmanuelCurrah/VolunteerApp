import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserHandler } from "../../../services/apiConfigUser/index.js";
import UserLoginForm from "../../../components/Forms/loginForm/userLogin/UserLoginForm";
import "../Login.css";
import { Layout } from "../../../components/Layout/Layout.jsx";

const login_input = {
  email: "",
  password: "",
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
      const userToken = res.data.data.token;
      const userName = res.data.data.user.userName;

      //storing login session into local storage
      localStorage.setItem("userToken", userToken);
      localStorage.setItem("userName", userName);
      setUserInput(login_input);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="login-page">
        <h2 className="signup-title">Volunteer Login</h2>
        <UserLoginForm
          userInput={userInput}
          handleLoginChange={handleLoginChange}
          handleLoginSubmit={handleLoginSubmit}
        />
      </div>
    </Layout>
  );
}
