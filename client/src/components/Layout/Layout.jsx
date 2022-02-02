import LoginNavBar from "../../UI/Nav/PreLoginNav/LoginNavBar";
import Footer from "../../UI/footer/Footer";

export const Layout = (props) => {
  return (
    <div>
      <LoginNavBar />
      <div className="props-children">{props.children}</div>
      <Footer />
    </div>
  );
};
