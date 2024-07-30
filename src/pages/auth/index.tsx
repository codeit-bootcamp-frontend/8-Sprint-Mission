import { Route, Routes, useLocation } from "react-router";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth() {
  const { pathname } = useLocation();
  console.log("🚀 ~ Auth ~ pathname:", pathname);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}
