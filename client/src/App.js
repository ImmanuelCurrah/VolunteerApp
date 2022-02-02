import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './screens/homePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import CreatePost from './screens/createPostPage/CreatePost';
import SignUpBusiness from './screens/signUpPage/SignUpBusiness';
import SignUpUser from './screens/signUpPage/SignUpUser';
import Contact from './screens/ContactPage/Contact';
import UserLogin from './screens/LoginPages/UserLogin/UserLogin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-user" element={<UserLogin />} />
        <Route path="/login-business" element={<h2>login business page</h2>} />
        <Route path="/sign-up-user" element={<SignUpUser />} />
        <Route path="/sign-up-business" element={<SignUpBusiness />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<h2>about us page</h2>} />
        <Route path="/account" element={<h2>account page</h2>} />
        <Route path="/create-post-business" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
