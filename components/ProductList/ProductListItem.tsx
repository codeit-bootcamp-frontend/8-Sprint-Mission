import Link from "next/link";
import Image from "next/image";
import likeIcon from "@/assets/images/ic_heart_empty.png";
import errorImage from "@/assets/images/img_default.png";
import { ProductTypes } from "@/types/product";

interface ProductListItemProps {
  item: ProductTypes;
  className: string;
}

function ProductListItem({ item, className }: ProductListItemProps) {
  const { id, name, price, images, favoriteCount } = item;

  return (
    <div className="product-list-item">
      <Link className="product-detail-link" href={`/items/${id}`}>
        <Image src={images[0]} alt={name} width={221} height={221} />
      </Link>
      <div className="title">{name}</div>
      <div className="price">{price}원</div>
      <div className="like">
        <Image
          className="like-icon"
          src={likeIcon}
          alt="좋아요 아이콘"
          width={16}
          height={16}
        />
        <div className="like-num">{favoriteCount}</div>
      </div>
    </div>
  );
}

export default ProductListItem;
