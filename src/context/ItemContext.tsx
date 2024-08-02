import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getProducts } from "../API/ItemAPI";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  createdAt: string;
  favoriteCount: number;
  tags: string;
}

interface ItemProviderPropt {
  children: ReactNode;
}

export const ItemContext = createContext<Product[]>([]);

export const ItemProvider: React.FC<ItemProviderPropt> = ({ children }) => {
  const [itemList, setItemList] = useState<Product[]>([]);

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
