import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, Home, Items, Login, Signup } from "#pages";
import { Header } from "#components";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/*">
            <Route index element={<Home />} />
            <Route path="items" element={<Items />} />
            <Route path="auth/*" element={<Auth />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
