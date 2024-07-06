import { Link } from 'react-router-dom';
import styles from './ItemList.module.css';
import heartIcon from '../../assets/images/heart_Icon.png';
import defaultImage from '../../assets/images/img_default.png';

export default function ItemList({ id, name, images, price, favoriteCount }) {
  const itemPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const onErrorImg = e => {
    e.target.src = defaultImage;
  };

  return (
    <article className={styles.product}>
      <Link to={`/items/${id}`}>
        <div className={styles.productImage}>
          <img src={images} onError={onErrorImg} alt={name} />
        </div>
        <div className={styles.productInfo}>
          <h2 className={styles.productName}>{name}</h2>
          <p className={styles.productPrice}>{`${itemPrice}원`}</p>
          <div className={styles.productFavorite}>
            <img src={heartIcon} alt="좋아요" />
            <p className={styles.favoriteCount}>{favoriteCount}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
