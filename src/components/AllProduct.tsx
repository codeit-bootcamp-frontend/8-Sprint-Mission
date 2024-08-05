import { Link } from "react-router-dom";
import { getProducts } from "../api.js";
import { MouseEvent, SetStateAction, useEffect, useState } from "react";

const responsivePageSize = () => {
  const winWidth = window.innerWidth;
  if (winWidth < 768) {
    // mo 버전
    return 4;
  } else if (winWidth < 1200) {
    // tab 버전
    return 6;
  } else {
    // pc 버전
    return 10;
  }
};

const RECENT = "recent";
const FAVORITE = "favorite";

interface Product {
  id: number;
  name: string;
  info: string;
  price: number;
  tag: string;
  images: string;
  favoriteCount: number;
}

function AllProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [order, setOrder] = useState<string>(RECENT);
  const [dropArrow, setDropArrow] = useState<string>("");
  const [dropDisplay, setDropDisplay] = useState<string>("none");
  const [orderTxt, setOrderTxt] = useState<string>("최신순");
  const [pagesNum, setPagesNum] = useState<number[]>([1, 2]);

  const handleLoad = async (options: {
    page: number;
    pageSize: number;
    order: string;
  }) => {
    let { list } = await getProducts(options);
    console.log(list);
    setProducts(list);
  };

  const handleDropClick = () => {
    setDropArrow(dropArrow === "" ? "on" : "");
    setDropDisplay(dropDisplay === "none" ? "block" : "none");
  };

  const handleNewsOrder = (e: MouseEvent<HTMLElement>) => {
    const menuTxt = e.currentTarget.textContent || "";
    setOrderTxt(menuTxt);
    setDropArrow("");
    setDropDisplay("none");
    setOrder(RECENT);
  };

  const handleBestOrder = (e: MouseEvent<HTMLElement>) => {
    const menuTxt = e.currentTarget.textContent || "";
    setOrderTxt(menuTxt);
    setDropArrow("");
    setDropDisplay("none");
    setOrder(FAVORITE);
  };

  const pageNumClick = (page: SetStateAction<number>) => {
    setPage(page);
  };

  const prevPageBtn = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const nextPageBtn = () => {
    if (page !== pagesNum.length) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    handleLoad({ page, pageSize, order });

    const handleResize = () => {
      setPageSize(responsivePageSize());
    };

    window.addEventListener("resize", handleResize);
  }, [page, order, pageSize]);

  return (
    <>
      <section className="product-wrap default-product max-wrap">
        <div className="product-title">
          <h2>판매중인 상품</h2>
          <div className="product-info-menu">
            <input type="search" placeholder="검색할 상품을 입력해주세요." />
            <Link to="/AddItem" className="item-add-btn">
              상품 등록하기
            </Link>
            <div className="drop-menu">
              <p className={dropArrow} onClick={handleDropClick}>
                {orderTxt}
              </p>
              <ul
                className="drop-menu-list"
                style={{ display: `${dropDisplay}` }}
              >
                <li onClick={handleNewsOrder}>최신순</li>
                <li onClick={handleBestOrder}>좋아요순</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="product-list-wrap">
          <ul className="product-list all-list">
            {products.map((product) => {
              const productPrice = product.price
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); // 숫자 3자리 마다 콤마 추가(정규식 사용)

              return (
                <li key={product.id}>
                  <Link to={`/Items/${product.id}`}>
                    <div className="product-img">
                      <img
                        src={
                          product.images
                            ? product.images
                            : "/images/card01-small.png"
                        }
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <p className="product-name">{product.name}</p>
                      <p className="product-price">{productPrice}원</p>
                      <div className="product-favoriteCount">
                        <button type="button">
                          <img src="/images/i-like.png" alt="하트 아이콘" />
                        </button>
                        <span>{product.favoriteCount}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pageNav">
          <ul>
            <li>
              <button type="button" onClick={prevPageBtn}>
                <img src="/images/i-arrow-left.png" alt="왼쪽 화살표" />
              </button>
            </li>
            {pagesNum.map((pageNum) => {
              return (
                <li key={pageNum} className={pageNum === page ? "on" : ""}>
                  <button
                    type="button"
                    onClick={() => {
                      pageNumClick(pageNum);
                    }}
                  >
                    {pageNum}
                  </button>
                </li>
              );
            })}
            <li>
              <button type="button" onClick={nextPageBtn}>
                <img src="/images/i-arrow-right.png" alt="왼쪽 화살표" />
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AllProduct;
