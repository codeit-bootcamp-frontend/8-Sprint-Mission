import { Link } from "react-router-dom";
import { getProducts } from "../api.js";
import { useEffect, useState } from "react";

const responsivePageSize = () => {
  const winWidth = window.innerWidth;
  if (winWidth < 768) {
    // mo 버전
    return 1;
  } else if (winWidth < 1200) {
    // tab 버전
    return 2;
  } else {
    // pc 버전
    return 4;
  }
};

interface Product {
  id: number;
  name: string;
  info: string;
  price: number;
  tag: string;
  images: string;
  favoriteCount: number;
}

function BestProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [order, setOrder] = useState("favorite");

  const handleLoad = async (options: {
    page: number;
    pageSize: number;
    order: string;
  }) => {
    const { list } = await getProducts(options);
    console.log(list);
    setProducts(list);
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
      <section className="product-wrap bset-product max-wrap">
        <div className="product-title">
          <h2>베스트 상품</h2>
        </div>

        <div className="product-list-wrap">
          <ul className="product-list best-list">
            {products.map((product) => {
              const productPrice = product.price
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); // 숫자 3자리 마다 콤마 추가(정규식 사용)

              return (
                <Link key={product.id} to={`/Items/${product.id}`}>
                  <li>
                    <div className="product-img">
                      <img src={product.images} alt={product.name} />
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
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default BestProduct;
