import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { ReactComponent as HeartIcon } from '@/asset/svg/ic_heart.svg';

interface ItemCardProps {
  item: Product;
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <Link to={`/items/${item.id}`} className='itemCard'>
      <img src={item.images[0]} alt={item.name} className='itemCardThumbnail' />
      <div className='itemSummary'>
        <h2 className='itemName'>{item.name}</h2>
        <p className='itemPrice'>{item.price.toLocaleString('ko-KR')}원</p>
        <div className='favoriteCount'>
          <HeartIcon />
          {item.favoriteCount}
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
