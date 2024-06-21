import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <h1>Main page</h1>
      <Link to="./login">Go login page</Link>
      <Link to="./signin">Go signin page</Link>
      <Link to="./items">Go item page</Link>
    </>
  );
}

export default Main;
