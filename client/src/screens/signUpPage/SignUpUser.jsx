import UserSignUpForm from "../../components/Forms/signUpForm/userSignUp/UserSignUpForm";
import { Layout } from "../../components/Layout/Layout";
import "./signup.css";

export default function SignUp() {
  return (
    <Layout>
      <div className="signup-page">
        <h2>Sign Up!</h2>
        <UserSignUpForm />
      </div>
    </Layout>
  )
}
