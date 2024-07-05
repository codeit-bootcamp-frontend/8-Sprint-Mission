import heartIcon from "../../assets/images/heart_Icon.png";
import styles from "./DetailProduct.module.css";

export default function DetailProduct({ product }) {
  const productPrice = product.price && product.price.toLocaleString("kr");

  return (
    <article className={styles.container}>
      <img
        className={styles.productImg}
        src={product.images && product.images[0]}
        alt={product.name}
      />
      <div className={styles.productDetails}>
        <div className={styles.productHeader}>
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.productPrice}>{productPrice}원</p>
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>상품 소개</h3>
          <p className={styles.productDescription}>{product.description}</p>
        </div>
        <div className={styles.productTag}>
          <h3 className={styles.tagTitle}>상품 태그</h3>
          <ul className={styles.tagList}>
            {product.tags &&
              product.tags.map((tag, index) => <li key={index}>#{tag}</li>)}
          </ul>
        </div>
        <button className={styles.favoriteCount}>
          <img src={heartIcon} alt="좋아요" />
          <span>{product.favoriteCount}</span>
        </button>
      </div>
    </article>
  );
}
