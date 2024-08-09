import S from "@/components/BestBoards.module.css";
import axios from "@/pages/api/axios";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

interface BestItemProps {
  list: Item[];
}

function Product(item: Item) {
  const { id, title, content, image, likeCount, createdAt, updatedAt, writer } = item;
  console.log(id);
  return (
    <div className={S.itemCardContainer}>
      <div className={S.itemCardInfo}>
        <div className={S.infoTop}>
          <div className={S.title}>{title}</div>
          <div className={S.image}>사진</div>
        </div>
        <div className={S.infoBottom}>
          <div className={S.nameAndHeart}>
            <div>{writer.nickname}</div>
            <div>{likeCount}</div>
          </div>
          <div className={S.date}>{createdAt}</div>
        </div>
      </div>
    </div>
  );
}

function BestBoards() {
  const [product, setProduct] = useState<BestItemProps>();
  const [isLoading, setIsLoading] = useState(true);

  async function getBestBoards() {
    const res = await axios.get("articles?page=1&pageSize=4&orderBy=like");
    const nextProduct = res.data;
    setProduct(nextProduct);
  }

  useEffect(() => {
    getBestBoards();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [product]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (product === undefined) {
    return <div>게시글이 없습니다.</div>;
  }
  const cutProduct = [...product.list];

  return (
    <>
      <h2 className={S.bestBoards}>베스트 게시글</h2>
      {cutProduct.map((item) => (
        <li key={item.id}>
          <Product {...item} />
        </li>
      ))}
    </>
  );
}

export default BestBoards;
