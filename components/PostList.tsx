import Image from "next/image";
import DateTrimmer from "@/utils/TimeTrimmer";
import styled from "styled-components";
import Link from "next/link";

const StyledArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledPostArea = styled.div`
  width: 100%;
  height: 138px;
  padding: 0;
  border-radius: 8px;
  background-color: var(--gray-20);
  border-bottom: 1px solid var(--gray-200);
  margin-top: 24px;
`;

const StyledPostTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--gray-800);
`;

const StyledImageWrapper = styled.img`
  width: 72px;
  height: 72px;
  border: 1px solid var(--gray-200);
  border-radius: 6px;
  position: relative;
`;

const StyledBottomLeftArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
`;

const StyledBottomRightArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
`;

const StyledNickname = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--gray-600);
`;

const StyledLikeCount = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--gray-500);
`;

const StyledDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--gray-400);
`;

type Writer = {
  nickname: string;
  id: number;
};

type Article = {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  title: string;
  id: number;
};

type Props = {
  articles: Article[];
};

function PostList({ articles }: Props) {
  return (
    <>
      {articles.map((article) => (
        <Link href={`/boards/${article.id}`} key={article.id}>
          <StyledPostArea>
            <StyledArea>
              <StyledPostTitle>{article.title}</StyledPostTitle>
              <StyledImageWrapper
                src={
                  article.image
                    ? article.image
                    : "/image/product_img_default.png"
                }
                alt="게시글 첨부 이미지"
              />
            </StyledArea>
            <StyledArea>
              <StyledBottomLeftArea>
                <Image
                  unoptimized={true}
                  width={24}
                  height={24}
                  src="/image/profile_img_none.png"
                  alt="가짜 프로필 이미지"
                />
                <StyledNickname>{article.writer.nickname}</StyledNickname>
                <StyledDate>{DateTrimmer(article.createdAt)}</StyledDate>
              </StyledBottomLeftArea>
              <StyledBottomRightArea>
                <Image
                  unoptimized={true}
                  width={20}
                  height={17}
                  src="/image/heart_inactive.png"
                  alt="좋아요 아이콘"
                />
                <StyledLikeCount>{article.likeCount}</StyledLikeCount>
              </StyledBottomRightArea>
            </StyledArea>
          </StyledPostArea>
        </Link>
      ))}
    </>
  );
}

export default PostList;
