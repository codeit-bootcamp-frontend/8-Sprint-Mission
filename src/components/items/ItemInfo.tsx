import FavoriteButton from '@core/ui/buttons/FavoriteButton';
import ImageCard from '@core/ui/cards/ImageCard';
import HorizontalLine from '@core/ui/lines/HorizontalLine/HorizontalLine';
import TagList from '@core/ui/tags/TagList';

interface ItemInfoProps {
  itemImgSrc: string;
  itemTitle: string;
  itemPrice: number;
  itemDesc: string;
  itemTags: string[];
  itemFavoriteCount: number;
}

function ItemInfo({
  itemImgSrc = '',
  itemTitle = '',
  itemPrice = 0,
  itemDesc = '',
  itemTags = [],
  itemFavoriteCount = 0,
}: ItemInfoProps) {
  return (
    <>
      <div className="flex justify-between items-start mb-8">
        <div className="w-[486px] h-[486px]">
          <ImageCard
            imageSrc={itemImgSrc}
            imgDefault={
              'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg'
            }
            round="edge"
          />
        </div>
        <div className="flex flex-col justify-between items-start ml-6 w-[690px] h-[486px]">
          <div>
            <div>
              <p className="mb-4 text-2xl font-semibold text-gray-800">
                {itemTitle}
              </p>
            </div>
            <div>
              <p className="mb-4 text-4xl font-semibold text-gray-800">{`${itemPrice}원`}</p>
            </div>
          </div>
          <HorizontalLine />
          <div>
            <div>
              <p className="mt-4 text-sm font-medium text-gray-600">
                {'상품 소개'}
              </p>
            </div>
            <div>
              <p className="mt-2 text-base font-normal leading-[140%] text-gray-800">
                {itemDesc}
              </p>
            </div>
            <div className="mt-4 text-sm font-medium text-gray-600">
              {'상품 태그'}
            </div>
            <div>
              <TagList tags={itemTags} isSharpVisible={true} />
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
