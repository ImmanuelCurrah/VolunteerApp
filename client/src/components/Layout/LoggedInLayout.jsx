import PostLoginNav from "../../UI/Nav/PostLoginNav/PostLoginNav";

export const LoggedInLayout = (props) => {
  return (
    <div>
      <PostLoginNav />
      <div>{props.children}</div>
      {/* footer goes here */}
    </div>
  )
};