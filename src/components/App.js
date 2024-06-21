import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Items from "./Items";
import { getProducts } from "../api.js";
import "../css/reset.css";
import "../css/style.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [order, setOrder] = useState("favorite");
  // const [order, setOrder] = useState("favoriteCount");

  const handleLoad = async (options) => {
    let { list } = await getProducts(options);
    setProducts(list);
    console.log(list);
  };

  useEffect(() => {
    handleLoad({ pageSize, order });
  }, []);

  return (
    <div className="wrap">
      <Header></Header>
      <main>
        {/* <Home></Home> */}
        {/* <Login></Login> */}
        {/* <Signup></Signup> */}
        <Items products={products}></Items>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
