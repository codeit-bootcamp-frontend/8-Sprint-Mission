import { useState, useEffect } from "react";

export default function useResponseHook(fetchFn, initialValue) {
  const [size, setSize] = useState(initialValue);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") {
        setWindowSize({
          width: window.innerWidth,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(fetchFn);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProducts();
  }, [fetchFn]);

  return {
    windowSize,
    products,
    size,
    error,
  };
}
