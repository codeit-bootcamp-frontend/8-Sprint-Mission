import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, Home } from "./pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="auth/*" element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
