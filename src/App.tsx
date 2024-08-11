import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "components/common/Layout/PageLayout";
import Home from "pages/Home";
import SignIn from "pages/SignIn";
import Items from "pages/Items";
import ItemInfo from "pages/ItemInfo";
import AddItem from "pages/AddItem";
import Boards from "pages/Boards";
import NotFound from "pages/NotFound";
import SignUp from "pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Header 포함 페이지 */}
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:productId" element={<ItemInfo />} />
          <Route path="/addItem" element={<AddItem />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Header 불포함 페이지 */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
