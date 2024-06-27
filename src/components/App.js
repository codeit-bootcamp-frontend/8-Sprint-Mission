import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Items from "./Items";
import "../css/reset.css";
import "../css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
            <Route path="/Items" element={<Items />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
