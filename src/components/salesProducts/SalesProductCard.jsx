import CardSales from "./CardSales";
import DefaultImg from "../../core/assets/images/img_default.png";

const SalesProductCard = ({ product }) => {
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
