import { useState, useContext, SyntheticEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { removeProduct, queryClient } from "../../utils/http";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import heartIcon from "../../assets/images/heart_Icon.png";
import styles from "./DetailProduct.module.css";
import defaultImage from "../../assets/images/img_default@2x.png";
import Dots from "../../ui/Dots/Dots";
import DropDown from "../../ui/DropDown/DropDown";

interface DetailProductProps {
  product: ProductProps;
}

export default function DetailProduct({ product }: DetailProductProps) {
  const { userId } = useContext(AuthContext);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const productPrice = product.price.toLocaleString("kr");
  const navigate = useNavigate();
  const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImage;
  };

  const { mutate, isError, error } = useMutation({
    mutationFn: removeProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
        refetchType: "none",
      });
      navigate("/items");
    },
  });

  const handleEditMenuOpen = () => {
    setIsEditOpen(true);
  };

  const handleDelete = () => {
    mutate(product.id as number);
  };

  const handleProductEdit = () => {
    navigate(`/items/${product.id}/edit`);
  };

  return (
    <article className={styles.container}>
      <img
        className={styles.productImg}
        src={product.images && product.images[0]}
        alt={product.name}
        onError={onErrorImg}
      />
      <div className={styles.productDetails}>
        <div className={styles.productHeader}>
          <div className={styles.nameContainer}>
            <h2 className={styles.productName}>{product.name}</h2>
            {userId === product.ownerId.toString() && (
              <Dots onEditOpenHandler={handleEditMenuOpen} />
            )}
          </div>
          <DropDown
            isOpen={isEditOpen}
            onEditHandler={handleProductEdit}
            onDeleteHandler={handleDelete}
          />
          <p className={styles.productPrice}>{productPrice}원</p>
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>상품 소개</h3>
          <p className={styles.productDescription}>{product.description}</p>
        </div>
        <div className={styles.productTag}>
          <h3 className={styles.tagTitle}>상품 태그</h3>
          <ul className={styles.tagList}>
            {product.tags &&
              product.tags.map((tag: string, index: number) => (
                <li key={index}>#{tag}</li>
              ))}
          </ul>
        </div>
        <button className={styles.favoriteCount}>
          <img src={heartIcon} alt="좋아요" />
          <span>{product.favoriteCount}</span>
        </button>
      </div>
    </article>
  );
}
