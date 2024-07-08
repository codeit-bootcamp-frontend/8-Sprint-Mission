import { useState } from 'react';
import { ReactComponent as IconHeart } from '../../../../assets/images/icons/ic_heart.svg';
import styles from './FavoriteButton.module.scss';

function FavoriteButton({ initCount = 0 }) {
  const [count, setCount] = useState(initCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button className={styles.btn} onClick={handleClick}>
        <div className={styles.btn__wrapper}>
          <IconHeart />
          <p className={styles.btn__count}>{count}</p>
        </div>
      </button>
    </>
  );
}

export default FavoriteButton;
