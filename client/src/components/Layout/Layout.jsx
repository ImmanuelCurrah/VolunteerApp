import LoginNavBar from "../../UI/Nav/PreLoginNav/LoginNavBar";
// import css file once we figure out bootstrap


export const Layout = (props) => {
  return (
    <div>
      <LoginNavBar />
      <div className="props-children">{props.children}</div>
      {/* footer goes here */}
    </div>
  )
};