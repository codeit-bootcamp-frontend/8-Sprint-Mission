import "./App.css";
import Nav from "./components/Nav";

function App({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}

export default App;
