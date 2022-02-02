// import logged in navbar

export const LoggedInLayout = (props) => {
  return (
    <div>
      {/* logged in navbar */}
      <div>{props.children}</div>
      {/* footer goes here */}
    </div>
  )
};