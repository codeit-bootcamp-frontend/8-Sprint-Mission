import CardSales from "./CardSales";
import DefaultImg from "../../core/assets/images/img_default.png";
import { ProductItem } from "core/Interface/Product";

interface SalesProductCardProps {
  product: ProductItem;
}

const SalesProductCard = ({ product }: SalesProductCardProps) => {
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
    <div>
      <CardSales
        imgSrc={getImageSource()}
        imgAlt={name ?? ""}
        description={name ?? ""}
        price={price?.toLocaleString("ko-KR") ?? 0}
        favoriteCount={favoriteCount ?? 0}
      />
    </div>
  );
};

export default SalesProductCard;
