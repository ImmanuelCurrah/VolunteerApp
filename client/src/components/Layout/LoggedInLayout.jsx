import PostLoginNav from "../../UI/Nav/PostLoginNav/PostLoginNav";
import Footer from "../../UI/footer/Footer";

export const LoggedInLayout = (props) => {
  return (
    <div>
      <PostLoginNav />
      <div>{props.children}</div>
      <Footer />
    </div>
  )
};