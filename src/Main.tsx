import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemsPage from "./pages/ItemsPage";
import AddItemPage from "./pages/AddItemPage";
import App from "./components/App";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function Main() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="items">
                    <Route index element={<ItemsPage />} />
                    <Route path=":itemId" element={<ItemPage />} />
                </Route>
                <Route path="additem" element={<AddItemPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default Main;
