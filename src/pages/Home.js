import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>home page</h1>
      <Link to="/login">Go login page</Link>
      <div></div>
      <Link to="/signin">Go signin page</Link>
      <div></div>
      <Link to="/items">Go item page</Link>
      <div></div>
    </>
  );
}

export default Home;
