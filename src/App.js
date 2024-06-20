import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<HomePage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
