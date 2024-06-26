import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Items from "./components/items/Items";

function App() {
  const [currentMenu, setCurrentMenu] = useState("/items");

  const handleMenuClick = (menu) => (e) => {
    e.preventDefault();
    setCurrentMenu(menu);
  };

  return (
    <>
      <Nav currentMenu={currentMenu} handleMenuClick={handleMenuClick} />
      {currentMenu === "#" /* && < /> */}
      {currentMenu === "/items" && <Items />}
    </>
  );
}

export default App;
