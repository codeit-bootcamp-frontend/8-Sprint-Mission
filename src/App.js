import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/MarketPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
