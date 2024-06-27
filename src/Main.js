import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ItemsPage from "./pages/ItemsPage.js";
import AddItemPage from "./pages/AddItemPage.js";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/forum" />
          <Route index path="/items" element={<ItemsPage />} />
          <Route path="/additem" element={<AddItemPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
