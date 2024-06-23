import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
// import BestProductList from "./components/BestProductList";
import AllProductList from "./components/AllProductList";

async function getData() {
  const url = "https://panda-market-api.vercel.app/products";
  const response = await fetch(url);
  const result = await response.json();

  const data = result.list.map((items) => ({
    id: items.id,
    title: items.name,
    description: items.description,
    price: items.price,
    image: items.images,
    favoriteCount: items.favoriteCount,
    createAt: items.createAt,
  }));

  return data;
}

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setItems(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <div className="product-lists">
        {/* <BestProductList items={items} /> */}
        <AllProductList className="all-product-list" items={items} />
      </div>
    </>
  );
}

export default App;
