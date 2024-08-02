import { Link } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";

import "./AllProductList.css";
import ProductListItem from "./ProductListItem";
import searchIcon from "../../assets/images/ic_search.png";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  favoriteCount: number;
  tags?: string[];
  createdAt: string;
}

interface Products {
  className?: string;
  products: Product[];
}

function AllProductList({ products }: any) {
  const [showedProducts, setShowedProducts] = useState<Product[]>([]);
  const [order, setOrder] = useState<string>("createdAt");

  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      if (order === "createdAt") {
        return (
          new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate()
        );
      }
      return (b as any)[order] - (a as any)[order];
    });
    setShowedProducts(sortedProducts.slice(0, 10));
  }, [order, products]);

  const handleOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };

  return (
    <div className="all-product-list">
      <div className="label">
        <div className="label-title">전체 상품</div>
        <div className="label-inputs">
          <div className="search-input-wrapper">
            <img
              className="search-input-icon"
              src={searchIcon}
              alt="검색창 돋보기 아이콘"
              width="24px"
              height="24px"
            ></img>
            <input
              className="search-input-text"
              type="text"
              placeholder="검색할 상품을 입력해주세요"
            ></input>
          </div>
          <Link className="product-add-link" to="/items/additem">
            상품 등록하기
          </Link>
          <select
            className="order-dropdown"
            name="order"
            id="order"
            onChange={handleOrderChange}
          >
            <option value="createdAt">최신순</option>
            <option value="favoriteCount">좋아요순</option>
          </select>
        </div>
      </div>

      <ul className="products">
        {showedProducts.map((showedProduct) => {
          return (
            <li key={showedProduct.id}>
              <ProductListItem
                item={showedProduct}
                className="all-product-list-item"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllProductList;
