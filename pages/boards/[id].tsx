import ArticleCommentList from "@/components/ArticleCommentList";
import Image from "next/image";
import DateTrimmer from "@/utils/TimeTrimmer";
import styled from "styled-components";
import Nav from "@/components/Nav";
import Button from "@/components/Button";
import { ChangeEvent, FormEvent, useState } from "react";

const articleDetail = {
  updatedAt: "2024-08-19T13:38:33.168Z",
  createdAt: "2024-08-19T13:38:33.168Z",
  likeCount: 20,
  writer: {
    nickname: "최영선",
    id: 3,
  },
  image: "https://dimg.donga.com/wps/NEWS/IMAGE/2021/12/09/110713388.1.jpg",
  content:
    "도저히 맥북을 계속 사용할 형편이 안 되어 처분하고 레노버 노트북 사려고 합니다.. 60만원에 팝니다 네고 없습니다. 6개월 사용했고, 코딩할 떄밖에 안 썼습니다.",
  title: "맥북 급처분합니다! 연락주세요!!!",
  id: 1,
};

const StyledContainer = styled.main`
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const StyledArea = styled.div`
  display: flex;
  gap: 30px;
`;

const StyledButton = styled(Button)`
  font-size: 16px;
  font-weight: 700;
`;

const StyledTopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;

const StyledPostArea = styled.div`
  width: 100%;
  height: 138px;
  padding: 0;
  border-radius: 8px;
  border-bottom: 1px solid var(--gray-200);
  margin-top: 24px;
`;

const StyledPostTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--gray-800);
`;

const StyledImageWrapper = styled.img`
  border: 1px solid var(--gray-200);
  border-radius: 6px;
  width: 700px;
  margin: 20px auto;
`;

const StyledBottomLeftArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border-right: 1px solid var(--gray-200);
`;

const StyledBottomRightArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border: 1px solid var(--gray-200);
  border-radius: 35px;
  width: 87px;
  height: 40px;
  padding: 4px 12px;
`;

const StyledNickname = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-600);
`;

const StyledLikeCount = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-500);
`;

const StyledDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--gray-400);
  padding-right: 32px;
`;

const StyledTextArea = styled.textarea`
  background-color: var(--gray-100);
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 104px;
  border-radius: 12px;
  border: none;
  resize: none;
  &:focus {
    outline: 1px solid var(--blue-100);
  }
  &:active {
    outline: 1px solid var(--blue-100);
  }
`;

const StyledContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--gray-800);
  margin-bottom: 20px;
`;

const StyledTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--gray-800);
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

function ArticleDetailPage() {
  const [commentValue, setCommentValue] = useState({ comment: "" });

  const handleChange = (name: string, value: string | null) => {
    setCommentValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(commentValue);
  };

  const checkAllInputsFilled = () => {
    return commentValue.comment !== "";
  };
  return (
    <>
      <Nav />
      <StyledContainer>
        <StyledPostArea key={articleDetail.id}>
          <StyledArea>
            <StyledPostTitle>{articleDetail.title}</StyledPostTitle>
          </StyledArea>
          <StyledArea>
            <StyledBottomLeftArea>
              <Image
                unoptimized={true}
                width={40}
                height={40}
                src="/image/profile_img_none.png"
                alt="가짜 프로필 이미지"
              />
              <StyledNickname>{articleDetail.writer.nickname}</StyledNickname>
              <StyledDate>{DateTrimmer(articleDetail.createdAt)}</StyledDate>
            </StyledBottomLeftArea>
            <StyledBottomRightArea>
              <Image
                unoptimized={true}
                width={27}
                height={24}
                src="/image/heart_inactive.png"
                alt="좋아요 아이콘"
              />
              <StyledLikeCount>{articleDetail.likeCount}</StyledLikeCount>
            </StyledBottomRightArea>
          </StyledArea>
        </StyledPostArea>
        <StyledImageWrapper
          src={
            articleDetail.image
              ? articleDetail.image
              : "/image/product_img_default.png"
          }
          alt="게시글 첨부 이미지"
        />
        <StyledContent>{articleDetail.content}</StyledContent>
        <form onSubmit={handleSubmit}>
          <StyledTopSection>
            <StyledTitle>댓글달기</StyledTitle>
            <StyledButton disabled={!checkAllInputsFilled()}>등록</StyledButton>
          </StyledTopSection>
          <label htmlFor="comment" />
          <StyledTextArea
            id="comment"
            name="comment"
            value={commentValue.comment}
            placeholder="댓글을 입력해주세요"
            onChange={handleInputChange}
          />
        </form>
        <ArticleCommentList />
      </StyledContainer>
    </>
  );
}

export default ArticleDetailPage;
