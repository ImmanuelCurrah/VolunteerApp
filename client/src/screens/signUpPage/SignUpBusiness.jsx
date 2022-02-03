import BusinessSignUpForm from "../../components/Forms/signUpForm/businessSignUp/BusinessSignUpForm";
import { Layout } from "../../components/Layout/Layout";
import "./signup.css";

export default function SignUpBusiness() {
  return (
    <Layout>
      <div className="signup-page">
        <h2>Sign up your business!</h2>
        <BusinessSignUpForm />
      </div>
    </Layout>
  )
}
