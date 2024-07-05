import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Commu from "./pages/Community/Commu";
import Market from "./pages/market/market";
import Login from "./pages/Login/Login";
import Header from "./global/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="items" element={<Market />} />
          <Route path="community" element={<Commu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
