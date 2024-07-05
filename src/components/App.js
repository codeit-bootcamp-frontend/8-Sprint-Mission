import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Items from "./Items";
import AddItem from "./AddItem";
import "../css/reset.css";
import "../css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Items">
              <Route index element={<Items />} />
              <Route path=":productId" element={<ProductDetail />} />
            </Route>
            <Route path="/AddItem" element={<AddItem />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
