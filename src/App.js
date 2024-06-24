import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import SignupPage from "./pages/SignupPage/SignupPage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";

// function manageHeader() {
//   return (path === ("/login" || "/signup")) ? true : false;
// }

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<HomePage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/signup" element={<SignupPage />} /> */}
          <Route exact path="/" element={<ItemsPage />} />
          <Route path="/additem" element={<AddItemPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
