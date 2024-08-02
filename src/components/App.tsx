import Footer from "./layout/Footer";
import Header from "./layout/Header";
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/items">
              <Route index element={<Items />} />
              <Route path=":productId" element={<ProductDetail />} />
            </Route>
            <Route path="/addItem" element={<AddItem />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
