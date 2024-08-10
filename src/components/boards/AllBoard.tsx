import { Button, LinkButton } from "@/styles/ButtonStyle";
import styled from "styled-components";
import SearchImage from "../../../public/images/i-search.png";
import LikeImage from "../../../public/images/i-like.png";
import ProfileImage from "../../../public/images/i-profile.png";
import { useState } from "react";
import Link from "next/link";
import { ArticlesList, ArticlesQuery } from "@/types/articleType";

const SearchInput = () => {
  return (
    <SearchWrap>
      <input type="search" placeholder="검색할 상품을 입력해주세요" />
    </SearchWrap>
  );
};

type DropDownOrderProp = {
  setArticleQuery: React.Dispatch<React.SetStateAction<ArticlesQuery>>;
};

const DropDownOrder = ({ setArticleQuery }: DropDownOrderProp) => {
  const ORDER_NEW = "최신순";
  const ORDER_LIKE = "좋아요순";
  const [dropText, setDropText] = useState<string>(ORDER_NEW);
  const [dropDisplay, setDropDisplay] = useState<boolean>(false);

  const handleClick = (order: string) => {
    setDropText(order);
    setDropDisplay(false);
    setArticleQuery((prev) => ({
      ...prev,
      orderBy: order === ORDER_NEW ? "recent" : "like",
    }));
  };

  return (
    <DropDownWrap>
      <p
        onClick={() => {
          setDropDisplay(!dropDisplay);
        }}
      >
        {dropText}
      </p>
      <ul style={{ display: dropDisplay ? "block" : "none" }}>
        <li onClick={() => handleClick(ORDER_NEW)}>{ORDER_NEW}</li>
        <li onClick={() => handleClick(ORDER_LIKE)}>{ORDER_LIKE}</li>
      </ul>
    </DropDownWrap>
  );
};

type AllBoardCardProp = {
  article: ArticlesList;
};

const AllBoardCard = ({ article }: AllBoardCardProp) => {
  return (
    <AllCardWrap>
      <AllCardTop>
        <AllCardTitle href={`/board/${article.id}`}>
          {article.title}
        </AllCardTitle>
        <AllCardImage>
          <img src={article.image} alt="게시글 이미지" />
        </AllCardImage>
      </AllCardTop>
      <AllCardBottom>
        <AllCardInfoLeft>
          <img src={ProfileImage.src} alt="프로필 이미지" />
          <p>{article.writer.nickname}</p>
          <span>2024.04.16</span>
        </AllCardInfoLeft>
        <AllCardLike>
          <img src={LikeImage.src} alt="하트 이미지" />
          {article.likeCount}
        </AllCardLike>
      </AllCardBottom>
    </AllCardWrap>
  );
};

type AllBoardProps = {
  articles: ArticlesList[];
  setArticleQuery: React.Dispatch<React.SetStateAction<ArticlesQuery>>;
};

export default function AllBoard({ articles, setArticleQuery }: AllBoardProps) {
  return (
    <AllBoardWrap>
      <AllBoardTitle>
        <h2>게시글</h2>
        <LinkButton href="">글쓰기</LinkButton>
      </AllBoardTitle>
      <AllBoardSearch>
        <SearchInput />
        <DropDownOrder setArticleQuery={setArticleQuery} />
      </AllBoardSearch>
      <AllBoardList>
        {articles.map((article) => {
          return <AllBoardCard key={article.id} article={article} />;
        })}
      </AllBoardList>
    </AllBoardWrap>
  );
}

const AllBoardWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;

const AllBoardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  a {
    width: 88px;
    height: 42px;
    padding-top: 2px;
  }
`;

const AllBoardSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`;

const SearchWrap = styled.label`
  display: inline-block;
  width: 100%;
  height: 42px;

  input {
    width: 100%;
    height: 100%;
    padding: 9px 16px 9px 44px;
    font-size: 1.6rem;
    font-weight: 400;
    border: none;
    border-radius: 12px;
    background-color: var(--gray100-color);
    background-image: url(${SearchImage.src});
    background-position: 20px 45%;
    background-repeat: no-repeat;
    color: var(--gray900-color);

    &::placeholder {
      font-size: 1.6rem;
      font-weight: 400;
      color: var(--gray400-color);
    }
  }
`;

const DropDownWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 130px;
  height: 42px;
  border: 1px solid var(--gray200-color);
  border-radius: 12px;

  p {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 3px 20px 0;
    font-size: 1.6rem;
    font-weight: 400;
    width: 100%;
    cursor: pointer;

    &::before {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-55%);
      content: "▾";
      font-size: 2rem;
    }
  }

  ul {
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    border: 1px solid var(--gray200-color);
    border-radius: 12px;
    background-color: #ffffff;
    overflow: hidden;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 42px;
      font-size: 1.6rem;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        background-color: var(--gray100-color);
      }

      &:first-child {
        border-bottom: 1px solid var(--gray200-color);
      }
    }
  }
`;

const AllBoardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AllCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 140px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray200-color);
  background-color: #fcfcfc;
`;

const AllCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 16px;
`;

const AllCardTitle = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  padding-top: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const AllCardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid var(--gray200-color);
  background-color: #ffffff;

  img {
    width: 100%;
  }
`;

const AllCardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AllCardInfoLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;

  img {
    width: 24px;
    height: 24px;
  }

  p {
    margin: 0 8px;
    color: var(--gray600-color);
  }

  span {
    color: var(--gray400-color);
  }
`;

const AllCardLike = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray500-color);

  img {
    margin-right: 8px;
  }
`;
