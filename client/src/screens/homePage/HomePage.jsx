import LoginNavBar from "../../UI/Nav/PreLoginNav/LoginNavBar";
import PostLoginNav from "../../UI/Nav/PostLoginNav/PostLoginNav";
import HomePageBody from "./HomePageBody";
import Footer from "../../UI/footer/Footer";

export default function HomePage() {
  // checking local storage for token that will be stored to see if there is a current login - return post login nav if there is a token and login nav if not
  const userToken = localStorage.getItem("userToken");
  const businessToken = localStorage.getItem("businessToken");

  // what will render if there is a token
  if (userToken || businessToken) {
    return (
      <div>
        <PostLoginNav />;
        <HomePageBody />
        <Footer />
      </div>
    );
  } else {
    // what will render if there is no token
    return (
      <div>
        <LoginNavBar />
        <HomePageBody />
        <Footer />
      </div>
    );
  }
}
