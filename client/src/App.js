import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h2>Homepage</h2>} />
        <Route path="/login-user" element={<h2>login user page</h2>} />
        <Route path="/login-business" element={<h2>login business page</h2>} />
        <Route path="/sign-up-user" element={<h2>sign up user page</h2>} />
        <Route
          path="/sign-up-business"
          element={<h2>sign up business page</h2>}
        />
        <Route path="/login-user" element={<h2>login user page</h2>} />
        <Route path="/login-business" element={<h2>login business page</h2>} />
        <Route path="/contact-us" element={<h2>contact us page</h2>} />
        <Route path="/about-us" element={<h2>about us page</h2>} />
        <Route path="/account" element={<h2>account page</h2>} />
        <Route path="/create-post-user" element={<h2>user post page</h2>} />
        <Route
          path="/create-post-business"
          element={<h2>create a post business page</h2>}
        />
      </Routes>
    </div>
  );
}

export default App;
