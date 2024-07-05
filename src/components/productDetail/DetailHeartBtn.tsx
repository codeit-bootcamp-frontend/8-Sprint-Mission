import BtnHeartLarge from "core/buttons/BtnHeartLarge";
import BtnHeartSmall from "core/buttons/BtnHeartSmall";
import { useEffect, useState } from "react";

interface DetailHeartBtnProps {
  isFavorite: boolean;
  favoriteCount: number;
}

const DetailHeartBtn = ({ isFavorite, favoriteCount }: DetailHeartBtnProps) => {
  const [size, setSize] = useState(window.innerWidth);
  const [isFavor, setIsFavor] = useState(isFavorite);

  const handleFavor = () => {
    setIsFavor((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {size < 768 ? (
        <BtnHeartSmall
          isFavorite={isFavor}
          favoriteCount={favoriteCount}
          onClick={handleFavor}
        />
      ) : (
        <BtnHeartLarge
          isFavorite={isFavor}
          favoriteCount={favoriteCount}
          onClick={handleFavor}
        />
      )}
    </>
  );
};

export default DetailHeartBtn;
