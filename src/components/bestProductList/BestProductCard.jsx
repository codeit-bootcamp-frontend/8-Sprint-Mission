import Card from "../../core/cards/Card";
import DefaultImg from "../../core/assets/images/img_default.png";

const BestProductCard = ({ product }) => {
  const { images, name, description, price, favoriteCount } = product;
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
      <Card
        imgSrc={getImageSource()}
        imgAlt={name ?? ""}
        description={description ?? ""}
        price={price ?? 0}
        favoriteCount={favoriteCount ?? 0}
      />
    </div>
  );
};

export default BestProductCard;
