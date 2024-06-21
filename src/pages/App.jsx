import { Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import Products from "./products/Products";
import AddItem from "./addItem/AddItem";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/items" element={<Products />} />
        <Route path="/addItem" element={<AddItem />} />
      </Routes>
    </div>
  );
};

export default App;
