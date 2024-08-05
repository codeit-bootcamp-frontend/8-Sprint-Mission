import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage/HomePage";
// import LoginPage from "@pages/LoginPage/LoginPage";
// import SignupPage from "@pages/SignupPage/SignupPage";
import ItemsPage from "@pages/ItemsPage/ItemsPage";
import ProductPage from "@pages/ProductPage/ProductPage";
import AddItemPage from "@pages/AddItemPage/AddItemPage";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";
import Header from "@components/Layout/jsx/Header";
import Footer from "@components/Layout/jsx/Footer";

/**
 * @todo ProductPage 구현
 * @todo ItemsPage -> AllItemsSection 페이지네이션 구현
 * @todo LoginPage React화
 * @todo SignupPage React화
 */
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/items">
          <Route index element={<ItemsPage />} />
          <Route path=":productId" element={<ProductPage />} />
        </Route>
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
