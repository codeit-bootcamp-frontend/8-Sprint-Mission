import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "assets/styles/GlobalStyle";
import theme from "assets/styles/theme";
import HomePage from "pages/HomePage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import UsedMarketPage from "pages/UsedMarketPage";
import ProductDetailPage from "pages/ProductDetailPage";
import AddProductPage from "pages/AddProductPage";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/items">
              <Route index element={<UsedMarketPage />} />
              <Route path="/:itemId" element={<ProductDetailPage />} />
              <Route path="/additem" element={<AddProductPage />} />
            </Route>
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
