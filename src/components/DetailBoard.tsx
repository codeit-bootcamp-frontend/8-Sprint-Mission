import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import S from "@/components/DetailBoard.module.css";
import axios from "@/pages/api/axios";
import Image from "next/image";

interface ProductType {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  createdAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

function Product() {
  const [product, setProduct] = useState<ProductType>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = Number(router.query["id"]);

  // 작성한 시간 변환 함수
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

  // 게시판 데이터 가져오기
  async function getProduct(id: number) {
    try {
      const res = await axios.get(`/articles/${id}`);
      const nextProduct = res.data;
      setProduct(nextProduct);
      setLoading(false);
    } catch (error) {
      alert(`유효하지 않은 주소입니다.`);
      router.replace(`/board`);
    }
  }

  useEffect(() => {
    getProduct(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!product) {
    return <div>No data</div>;
  }

  const { title, content, likeCount, createdAt, writer } = product;
  return (
    <main className={S.main}>
      <div className={S.ProductInfoContainer}>
        <div className={S.titleContainer}>
          <h2 className={S.title}>{title}</h2>
          <Image
            src="/images/icon/btn_icon/ic_kebab_menu.png"
            alt="게시글 수정 아이콘"
            width={24}
            height={24}
          />
        </div>
        <div>
          <div className={S.info}>
            <Image
              src="/images/icon/ic_null_user_profile_image.png"
              alt="사용자 프로필 이미지"
              width={40}
              height={40}
            />
            <div className={S.writerNickName}>{writer.nickname}</div>
            <div className={S.createdAt}>{formatDate(createdAt)}</div>
            <div className={S.favoriteContainer}>
              <div className={S.favoriteBox}>
                <Image
                  src="/images/icon/btn_icon/ic_favorite.png"
                  alt="좋아요 하트 아이콘"
                  width={24}
                  height={24}
                />
                {likeCount}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={S.content}>{content}</div>
    </main>
  );
}

export default Product;
