import Nav from "./Nav/Nav.js";
import Best from "./Best/Best.js";
import ProductList from "./ProductList/ProductList.js";
import Pages from "./Pages/Pages.js";
import { getProducts } from "../api.js";
import { useEffect, useState } from "react";

function App() {
  const [bests, setBests] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("recent");

  const handleLoadProduct = async (order) => {
    const products = await getProducts("1", "10", order);
    setProducts(products.list);
  };

  const handleOrderToggle = (getOrder) => {
    const orderMethod = { 최신순: "recent", 좋아요순: "favorite" };
    setOrder(orderMethod[getOrder]);
  };

  const handleLoadBest = async () => {
    const bests = await getProducts("1", "4", "favorite");
    setBests(bests.list);
  };

  useEffect(() => {
    handleLoadBest();
  }, []);

  useEffect(() => {
    handleLoadProduct(order);
  }, [order]);

  return (
    <div className="entire">
      <Nav />
      <Best bests={bests} />
      <ProductList products={products} onSortMethodChange={handleOrderToggle} />
      <Pages />
    </div>
  );
}

export default App;
