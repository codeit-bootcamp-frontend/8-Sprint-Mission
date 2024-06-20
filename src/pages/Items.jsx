import React, { useEffect, useState } from "react";

function Items() {
  const [products, setProducts] = useState([]);

  console.log(products);
  useEffect(() => {
    fetch(
      "https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=recent"
    )
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  return <div>hello</div>;
}

export default Items;
