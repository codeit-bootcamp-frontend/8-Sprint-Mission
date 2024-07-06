import FavoriteButton from '../../../core/ui/buttons/FavoriteButton/FavoriteButton';
import ImageCard from '../../../core/ui/cards/ImageCard/ImageCard';
import HorizontalLine from '../../../core/ui/lines/HorizontalLine/HorizontalLine';
import TagList from '../../../core/ui/tags/TagList/TagList';
import styles from './ItemInfo.module.scss';

function ItemInfo({
  itemImgSrc = '',
  itemTitle = '',
  itemPrice = 0,
  itemDesc = '',
  itemTags = [],
  itemFavoriteCount = 0,
}) {
  return (
    <>
      <div className={styles['item-info']}>
        <div className={styles['item-info__img']}>
          <ImageCard
            imageSrc={itemImgSrc}
            ImgDeafault={
              'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg'
            }
            isRoundEdged={true}
          />
        </div>
        <div className={styles['item-info__content']}>
          <div>
            <div>
              <div>
                <p className={styles['item-info__title']}>{itemTitle}</p>
              </div>
              <div>
                <p className={styles['item-info__price']}>{`${itemPrice}원`}</p>
              </div>
            </div>
            <HorizontalLine />
            <div>
              <div>
                <p className={styles['item-info__content-title']}>
                  {'상품 소개'}
                </p>
              </div>
              <div>
                <p className={styles['item-info__desc-content']}>{itemDesc}</p>
              </div>
              <div className={styles['item-info__content-title']}>
                {'상품 태그'}
              </div>
              <div>
                <TagList tags={itemTags} isSharpVisible={true} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <FavoriteButton initCount={itemFavoriteCount} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemInfo;
