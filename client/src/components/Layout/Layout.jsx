// import navbar and footer once those are done
// import css file once we figure out bootstrap


export const Layout = (props) => {
  return (
    <div>
      {/* navbar goes here */}
      <div className="props-children">{props.children}</div>
      {/* footer goes here */}
    </div>
  )
};