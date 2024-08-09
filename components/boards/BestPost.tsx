import styles from './BestPost.module.scss';
import CustomImage from '../@shared/CustomImage';
import BestIcon from '@/public/images/boards/best-icon.png';
import sampleImg from '@/public/images/@shared/no-image-placeholder.png';
import likeImg from '@/public/images/market/like-icon.png';

function BestPost() {
  return (
    <article className={styles.bestPost}>
      <div className={styles.bestDeco}>
        <CustomImage
          src={BestIcon}
          alt={'베스트 상품 메달 아이콘'}
          height={16}
          width={16}
        />
        <span>Best</span>
      </div>

      <div className={styles.postContent}>
        <div>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</div>
        <CustomImage
          src={sampleImg}
          alt={'베스트 상품 이미지'}
          height={72}
          width={72}
          radius={6}
          aspectRatio={1}
        />
      </div>

      <div className={styles.postInfo}>
        <div className={styles.authorNameAndLikeCount}>
          <span className={styles.authorName}>총명한 판다</span>
          <div className={styles.likeCount}>
            <CustomImage
              src={likeImg}
              alt={'좋아요 아이콘'}
              height={16}
              width={16}
            />
            <span>9999+</span>
          </div>
        </div>
        <span className={styles.createdAt}>2024. 04. 16</span>
      </div>
    </article>
  );
}

export default BestPost;
