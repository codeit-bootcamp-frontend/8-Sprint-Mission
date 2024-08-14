import S from "@/components/NormalBoards.module.css";
import Image from "next/image";
import DropDown from "./DropDown";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "@/pages/api/axios";
import Link from "next/link";
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
    image: string;
  };
}

interface NormalItemProps {
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
    <>
      <div className={S.itemCardInfo}>
        <div className={S.infoTop}>
          <div className={S.title}>{title}</div>
          <div className={S.image}>
            <Image fill src={image} className={S.image} alt="아이템 이미지" />
          </div>
        </div>
        <div className={S.infoBottom}>
          <div className={S.userInfo}>
            <div className={S.userProfileImage}>
              <Image
                src="/images/icon/ic_null_user_profile_image.png"
                alt="사용자 프로필 이미지"
                width={24}
                height={24}
              />
            </div>
            <div>{writer.nickname}</div>
            <div className={S.date}>{formattedCreatedAtDate}</div>
          </div>
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
      </div>
    </>
  );
}

function NormalBoards() {
  const [product, setProduct] = useState<NormalItemProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [orderBy, setOrderBy] = useState<string>("recent");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getBoards(orderBy);
  };

  const handleOrderChange = async (order: string) => {
    try {
      if (order === "favorite") {
        setOrderBy("like");
        getBoards("like");
      } else if (order === "recent") {
        setOrderBy("recent");
        getBoards("recent");
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  async function getBoards(order = "recent") {
    const res = await axios.get(
      `articles?page=1&pageSize=10&orderBy=${order}&keyword=${inputValue}`
    );
    const nextProduct = res.data;
    setProduct(nextProduct);
  }

  useEffect(() => {
    getBoards();
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
    <div className={S.normalBoardsContainer}>
      <div className={S.normalBoards}>
        <div className={S.post}>게시글</div>
        <Link href="/addboard" className={S.postButton}>
          글쓰기
        </Link>
      </div>
      <div className={S.searchAndDropdown}>
        <form className={S.searchForm} onSubmit={handleSubmit}>
          <input
            className={S.searchBar}
            placeholder="검색할 상품을 입력해주세요"
            onChange={handleChange}
          />
        </form>
        <div className={S.serchImage}>
          <Image
            width={24}
            height={24}
            src="/images/icon/btn_icon/ic_search.png"
            alt="검색 돋보기 이미지"
          />
        </div>
        <DropDown orderBy={orderBy} handleOrderChange={handleOrderChange} />
      </div>
      <ul>
        {cutProduct.map((item) => (
          <li className={S.list} key={item.id}>
            <Product {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NormalBoards;
