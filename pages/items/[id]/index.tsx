import CommentList from '@components/comments/CommentList';
import ItemInfo from '@components/items/ItemInfo';
import BasicLayout from '@components/layout/BasicLayout/BasicLayout';
import Button from '@core/ui/buttons/Button';
import SimpleInput from '@core/ui/inputs/SimpleInput';
import HorizontalLine from '@core/ui/lines/HorizontalLine/HorizontalLine';
import { useItem } from '@lib/hooks/items/useItem';
import { useItemComments } from '@lib/hooks/items/useItemComments';
import { useParams, useRouter } from 'next/navigation';

const ItemDetailPage = () => {
  const params = useParams();
  const productId = params?.id ? Number(params.id) : null;
  const navigate = useRouter();

  const itemState = useItem(productId || 0);

  const { comments } = useItemComments({
    productId: productId || 0,
    limit: 3,
    cursor: '',
    deps: [],
  });

  if (productId === null) {
    return <div>상품 ID를 찾을 수 없습니다.</div>;
  }

  const { imgSrc, title, price, desc, tags, favoriteCount } = itemState;

  return (
    <BasicLayout>
      <div className="max-w-[1200px] mx-auto my-24 px-4">
        <ItemInfo
          itemImgSrc={imgSrc}
          itemTitle={title}
          itemDesc={desc}
          itemPrice={price}
          itemTags={tags}
          itemFavoriteCount={favoriteCount}
        />
        <HorizontalLine />

        <form className="mt-6">
          <SimpleInput
            isLabelVisible={true}
            lable="문의하기"
            name="comm"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            type="text"
          />
          <div className="flex justify-end mt-4">
            <Button
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
        <div className="flex justify-center mt-10">
          <Button
            text="목록으로 돌아가기"
            // iconBack={<IconBack />}
            onClick={() => {
              navigate.push('/items');
            }}
          />
        </div>
      </div>
    </BasicLayout>
  );
};

export default ItemDetailPage;
