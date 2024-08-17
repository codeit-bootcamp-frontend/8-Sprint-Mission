import { LinkButton } from "@/styles/ButtonStyle";
import styled from "styled-components";
import { ArticlesList, ArticlesQuery } from "@/types/articleType";
import AllBoardCard from "./AllBoardCard";
import BoardSearch from "./BoardSearch";
import BoardOrder from "./BoardOrder";
import Link from "next/link";

export type AllBoardProps = {
  articles: ArticlesList[];
  setArticleQuery: React.Dispatch<React.SetStateAction<ArticlesQuery>>;
};

export default function AllBoard({ articles, setArticleQuery }: AllBoardProps) {
  return (
    <AllBoardWrap>
      <AllBoardTitle>
        <h2>게시글</h2>
        <LinkButton href="/addboard">글쓰기</LinkButton>
      </AllBoardTitle>
      <AllBoardSearch>
        <BoardSearch setArticleQuery={setArticleQuery} />
        <BoardOrder setArticleQuery={setArticleQuery} />
      </AllBoardSearch>
      <AllBoardList>
        {articles.map((article) => {
          return (
            <Link key={article.id} href={`boards/${article.id}`}>
              <AllBoardCard article={article} />
            </Link>
          );
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

const AllBoardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
