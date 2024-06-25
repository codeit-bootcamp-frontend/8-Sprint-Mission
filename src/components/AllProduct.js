import { getProducts } from "../api.js";
import { useEffect, useState } from "react";

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

function AllProduct() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [order, setOrder] = useState("recent");
  const [dropArrow, setDropArrow] = useState("");
  const [dropDisplay, setDropDisplay] = useState("none");
  const [orderTxt, setOrderTxt] = useState("최신순");
  const [pagesNum, setPagesNum] = useState([1, 2]);

  const handleLoad = async (options) => {
    let { list } = await getProducts(options);
    setProducts(list);
    // console.log(list);
  };

  const handleDropClick = () => {
    dropArrow === "" ? setDropArrow("on") : setDropArrow("");
    dropDisplay === "none" ? setDropDisplay("block") : setDropDisplay("none");
  };

  const handleNewsOrder = (e) => {
    const menuTxt = e.target.textContent;
    setOrderTxt(menuTxt);
    setDropArrow("");
    setDropDisplay("none");
    setOrder("recent");
  };

  const handleBestOrder = (e) => {
    const menuTxt = e.target.textContent;
    setOrderTxt(menuTxt);
    setDropArrow("");
    setDropDisplay("none");
    setOrder("favorite");
  };

  const pageNumClick = (page) => {
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
            <button type="button">상품 등록하기</button>
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
              const imgChk = product.images.join("").includes("jpeg"); // 이미지 경로에 jpeg가 있는지 확인

              return (
                <li key={product.id}>
                  <div className="product-img">
                    <img
                      src={imgChk ? product.images : "/images/card01-small.png"} // 이미지 경로에 jpeg가 없으면 기본 이미지 있으면 정상적인 이미지
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
