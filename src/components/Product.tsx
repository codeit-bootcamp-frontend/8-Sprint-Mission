import { useEffect, useState } from "react";
import { getApiProducts } from "@/pages/api/getApi";
import { useRouter } from "next/router";
import Image from "next/image";
import S from "@/components/Product.module.css";

interface Item {
  favoriteCount: number;
  images: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

function Product() {
  const router = useRouter();
  const id = router.query["id"];
  const [items, setItems] = useState<Item | null>(null);
  const [alltags, setAllTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [korPrice, setKorPrice] = useState("");

  // 상품 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const result = await getApiProducts(id);
          setItems(result);
          setAllTags(result.tags || []);
          if (result) {
            const won = result.price.toLocaleString("ko-KR");
            setKorPrice(won);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!items) {
    return <div>No data</div>;
  }

  const { favoriteCount, images, name, description } = items;
  return (
    <main className={S.main}>
      <section className={S.detailsContainer}>
        <div className={S.imageWrapper}>
          <Image fill src={images[0]} alt="상품 이미지" className={S.image} />
        </div>
        <div className={S.top}>
          <div className={S.titleContainer}>
            <div className={S.titleBox}>
              <h2 className={S.title}>{name}</h2>
              <Image
                src="/images/icon/btn_icon/ic_kebab_menu.png"
                alt="케밥 메뉴 아이콘"
                width={24}
                height={24}
              />
            </div>
            <div className={S.price}>{korPrice}원</div>
          </div>
          <p className={S.miniTitle}>상품 소개</p>
          <p className={S.text}>{description}</p>
          <p className={S.miniTitle}>상품 태그</p>
          <ul>
            {alltags.map((tag, index) => (
              <li key={tag + index} className={S.tag}>{`#${tag}`}</li>
            ))}
          </ul>
          <div className={S.favoriteBox}>
            <div className={S.favoriteButton}>
              <Image
                src="/images/icon/btn_icon/ic_favorite.png"
                alt="좋아요 하트 아이콘"
                width={24}
                height={24}
              />
              {favoriteCount}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
