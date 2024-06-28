import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import SignupPage from "./pages/SignupPage/SignupPage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import Header from "./components/Layout/jsx/Header";
import Footer from "./components/Layout/jsx/Footer";

// function manageHeader() {
//   return (path === ("/login" || "/signup")) ? true : false;
// }

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
