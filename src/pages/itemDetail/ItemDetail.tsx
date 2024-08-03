import { useNavigate, useParams } from 'react-router-dom';
import { useItem } from '../../lib/items/hooks/useItem';
import ItemInfo from '../../components/items/ItemInfo/ItemInfo';
import HorizontalLine from '../../core/ui/lines/HorizontalLine/HorizontalLine';
import Button from '../../core/ui/buttons/Button/Button';
import CommentList from '../../core/ui/comments/CommentList/CommentList';
// import { ReactComponent as IconBack } from '../../assets/images/icons/ic_back.svg';
// import { ReactComponent as IconEmptyComment } from '../../assets/images/icons/ic_inquiry_empty.svg';
import { useItemComments } from '../../lib/items/hooks/useItemComments';
import SimpleInput from '../../core/ui/inputs/SimpleInput/SimpleInput';
import styles from './ItemDetail.module.scss';

function ItemDetail() {
  const { productId } = useParams<string>();
  const navigate = useNavigate();

  const { imgSrc, title, price, desc, tags, favoriteCount } = useItem(
    Number(productId),
    []
  );

  const { comments } = useItemComments({
    productId: Number(productId),
    limit: 3,
    cursor: '',
    deps: [],
  });

  return (
    <>
      <div className={styles['item-detail']}>
        <ItemInfo
          itemImgSrc={imgSrc}
          itemTitle={title}
          itemDesc={desc}
          itemPrice={price}
          itemTags={tags}
          itemFavoriteCount={favoriteCount}
        />
        <HorizontalLine />

        <form className={styles['comment-form']}>
          <SimpleInput
            isLabelVisible={true}
            lable="문의하기"
            name="comm"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            type="text"
          />
          <div className={styles['comment-form__btn-submit']}>
            <Button
              customBorderRound={true}
              text="등록"
              onClick={(e) => {
                e.preventDefault();
              }}
              isDisabled={true}
            />
          </div>
        </form>

        <CommentList
          comments={comments}
          // emptyIcon={<IconEmptyComment />}
          emptyMessage={'아직 문의가 없습니다.'}
        />
        <div className={styles['item-detail__btn-to-list']}>
          <Button
            text="목록으로 돌아가기"
            // iconBack={<IconBack />}
            onClick={() => {
              navigate('/items');
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
