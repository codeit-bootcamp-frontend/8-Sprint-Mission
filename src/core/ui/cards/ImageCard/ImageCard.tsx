import styles from './ImageCard.module.scss';
import errImg from '../../../../assets/images/market/img_default.png';

interface ImageCardProps {
  imageSrc: string;
  ImgDeafault?: string;
  isRoundEdged?: boolean;
  isRound?: boolean;
}

function ImageCard({
  imageSrc,
  ImgDeafault,
  isRoundEdged = false,
  isRound = false,
}: ImageCardProps) {
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
            const target = e.target as HTMLImageElement;
            target.src = errImg;
          }}
        />
      </div>
    </>
  );
}

export default ImageCard;
