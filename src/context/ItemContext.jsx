import React, { createContext, useState, useEffect } from "react";
import { getProducts } from "../API/ItemAPI";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchAndProcessData = async () => {
      try {
        const data = await getProducts();
        setItemList(data.list);
      } catch (error) {
        console.error("데이터를 가져오지 못했습니다", error);
      }
    };
    fetchAndProcessData();
  }, []);

  return (
    <ItemContext.Provider value={itemList}>{children}</ItemContext.Provider>
  );
};
