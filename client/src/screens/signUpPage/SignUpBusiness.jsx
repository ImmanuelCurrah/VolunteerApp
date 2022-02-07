import BusinessSignUpForm from "../../components/Forms/signUpForm/businessSignUp/BusinessSignUpForm";
import { Layout } from "../../components/Layout/Layout";
import "./signup.css";

export default function SignUpBusiness() {
  return (
    <Layout>
      <div className="signup-business-page">
        <h2 className="signup-title">Sign up your business!</h2>
        <BusinessSignUpForm />
      </div>
    </Layout>
  );
}
