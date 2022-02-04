import LoginNavBar from "../../UI/Nav/PreLoginNav/LoginNavBar";
import Footer from "../../UI/footer/Footer";
import PostLoginNav from "../../UI/Nav/PostLoginNav/PostLoginNav";

export const Layout = (props) => {
  const user = localStorage.getItem("userName");
  const business = localStorage.getItem("businessName");
  return (
    <div>
      {user || business ? <PostLoginNav /> : <LoginNavBar />}
      <div className="props-children">{props.children}</div>
      <Footer />
    </div>
  );
};
