import CardBest from "./CardBest";
import DefaultImg from "../../core/assets/images/img_default.png";
import { ProductItem } from "core/Interface/Product";

interface BestProductCardProps {
  product: ProductItem;
}

const BestProductCard = ({ product }: BestProductCardProps) => {
  const { images, name, price, favoriteCount } = product;
  const getImageSource = () => {
    let imgSrc;
    if (images.length) {
      imgSrc = images[0];
    } else {
      imgSrc = DefaultImg;
    }
    return imgSrc;
  };
  return (
    <CardBest
      imgSrc={getImageSource()}
      imgAlt={name ?? ""}
      description={name ?? ""}
      price={price?.toLocaleString("ko-KR") ?? "0"}
      favoriteCount={favoriteCount ?? 0}
    />
  );
};

export default BestProductCard;
