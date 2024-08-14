import S from "@/components/BestBoards.module.css";
import axios from "@/pages/api/axios";
import Image from "next/image";
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

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const formattedDate = date
      .toLocaleDateString("ko-KR", options)
      .replace(/\s+/g, "")
      .replace(/\//g, ".");

    return formattedDate.endsWith(".") ? formattedDate.slice(0, -1) : formattedDate;
  }
  const formattedCreatedAtDate = formatDate(createdAt);

  return (
    <div className={S.itemCardContainer}>
      <div className={S.bestClip}>
        <Image
          width={16}
          height={16}
          src="/images/icon/ic_best_badge.png"
          alt="베스트 배지 이미지"
        />
        Best
      </div>
      <div className={S.itemCardInfo}>
        <div className={S.infoTop}>
          <div className={S.title}>{title}</div>
          <div className={S.image}>
            <Image fill src={image} className={S.image} alt="아이템 이미지" />
          </div>
        </div>
        <div className={S.infoBottom}>
          <div className={S.nameAndHeart}>
            <div>{writer.nickname}</div>
            <div className={S.likeButton}>
              <Image
                width={16}
                height={16}
                src="/images/icon/btn_icon/ic_favorite.png"
                alt="하트 이미지"
              />
              {likeCount}
            </div>
          </div>
          <div className={S.date}>{formattedCreatedAtDate}</div>
        </div>
      </div>
    </div>
  );
}

function BestBoards() {
  const [product, setProduct] = useState<BestItemProps>();
  const [isLoading, setIsLoading] = useState(true);

  async function getBestBoards() {
    const res = await axios.get("articles?page=1&pageSize=3&orderBy=like");
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
      <ul className={S.list}>
        {cutProduct.map((item) => (
          <li key={item.id}>
            <Product {...item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default BestBoards;
