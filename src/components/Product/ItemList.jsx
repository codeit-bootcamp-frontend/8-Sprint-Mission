import styles from './ItemList.module.css';
import heartIcon from '../../assets/images/heart_Icon.png';
import errorImage from '../../assets/images/error_image.png';

export default function ItemList({ name, images, price, favoriteCount }) {
  const itemPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const onErrorImg = e => {
    e.target.src = errorImage;
  };
  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <img src={images} onError={onErrorImg} alt={name} />
      </div>
      <div className={styles.product__info}>
        <p className={styles.product__name}>{name}</p>
        <p className={styles.product__price}>{`${itemPrice}원`}</p>
        <div className={styles.product__favorite}>
          <img src={heartIcon} alt="좋아요" />
          <p className={styles.favorite__count}>{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}
