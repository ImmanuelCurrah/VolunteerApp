<<<<<<< HEAD
import HomePage from './screens/homePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import CreatePost from './screens/createPostPage/CreatePost';
import SignUpBusiness from './screens/signUpPage/SignUpBusiness';
import SignUpUser from './screens/signUpPage/SignUpUser';
import Contact from './screens/ContactPage/Contact';
import UserLogin from './screens/LoginPages/UserLogin/UserLogin';
import BusinessLogin from './screens/LoginPages/BusinessLogin/BusinessLogin';
import AllPosts from './screens/AllPostsPage/AllPosts';
import PageNotFound from './screens/404Page/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
=======
import HomePage from "./screens/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./screens/createPostPage/CreatePost";
import SignUpBusiness from "./screens/signUpPage/SignUpBusiness";
import SignUpUser from "./screens/signUpPage/SignUpUser";
import Contact from "./screens/ContactPage/Contact";
import UserLogin from "./screens/LoginPages/UserLogin/UserLogin";
import BusinessLogin from "./screens/LoginPages/BusinessLogin/BusinessLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Account from "./screens/accountPage/Account";
>>>>>>> 66e6934db05fb08d900402340f1eb18ebb528746

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-users" element={<UserLogin />} />
        <Route path="/login-business" element={<BusinessLogin />} />
        <Route path="/sign-up-user" element={<SignUpUser />} />
        <Route path="/sign-up-business" element={<SignUpBusiness />} />
        <Route path="/all-posts" element={<AllPosts />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<h2>about us page</h2>} />
        <Route path="/account" element={<Account />} />
        <Route path="/create-post-business" element={<CreatePost />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
