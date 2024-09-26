import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductListTypes, ProductTypes } from "@/types/product";
import searchIcon from "@/assets/images/ic_search.png";
import ProductListItem from "./ProductListItem";

function AllProductList({ products }: ProductListTypes) {
  const [showedProducts, setShowedProducts] = useState<ProductTypes[]>([]);
  const [order, setOrder] = useState<string>("createdAt");

  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      if (order === "createdAt") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
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
            <Image
              className="search-input-icon"
              src={searchIcon}
              alt="검색창 돋보기 아이콘"
              width={24}
              height={24}
            />
            <input
              className="search-input-text"
              type="text"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <Link className="product-add-link" href="/items/additem">
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
