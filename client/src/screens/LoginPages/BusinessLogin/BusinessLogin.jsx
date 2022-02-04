import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginBusinessHandler } from "../../../services/apiConfigBusiness/index.js";
import BusinessLoginForm from "../../../components/Forms/loginForm/businessLogin/BusinessLoginForm";
import "../Login.css";
import { Layout } from "../../../components/Layout/Layout.jsx";

const business_input = {
  email: "",
  password: "",
};

export default function BusinessLogin() {
  const [businessInput, setBusinessInput] = useState(business_input);

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setBusinessInput((prevBusinessInput) => ({
      ...prevBusinessInput,
      [id]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await loginBusinessHandler(businessInput);
      localStorage.setItem("businessToken", res.data.data.token);
      localStorage.setItem("businessName", res.data.data.business.businessName);
      setBusinessInput(business_input);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="login-page">
        <h2>Business Login</h2>
        <BusinessLoginForm
          businessInput={businessInput}
          handleLoginChange={handleLoginChange}
          handleLoginSubmit={handleLoginSubmit}
        />
      </div>
    </Layout>
  );
}
