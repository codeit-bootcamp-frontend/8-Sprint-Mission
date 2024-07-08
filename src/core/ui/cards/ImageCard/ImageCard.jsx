import styles from './ImageCard.module.scss';
import errImg from '../../../../assets/images/market/img_default.png';

function ImageCard({
  imageSrc,
  ImgDeafault,
  isRoundEdged = false,
  isRound = false,
}) {
  return (
    <>
      <div className={styles.wrapper}>
        <img
          src={imageSrc || ImgDeafault}
          className={`${styles.photo__img} 
					${isRoundEdged ? styles['photo__img--round16'] : ''}
					${isRound ? styles['photo__img--round50percent'] : ''}
					`}
          alt="상품 사진"
          onError={(e) => {
            e.target.src = errImg;
          }}
        />
      </div>
    </>
  );
}

export default ImageCard;
