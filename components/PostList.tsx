import Image from "next/image";
import SearchInput from "./SearchInput";
import DateTrimmer from "@/utils/TimeTrimmer";
import styled from "styled-components";
import DropDown from "./DropDown";
import Button from "./Button";

const post = {
  updatedAt: "2024-08-13T11:07:29.015Z",
  createdAt: "2024-08-13T11:07:29.015Z",
  likeCount: 100,
  writer: {
    nickname: "최영선",
    id: 1,
  },
  image: "https://dimg.donga.com/wps/NEWS/IMAGE/2021/12/09/110713388.1.jpg",
  title: "맥북 팝니다!! 급처분해요",
  id: 1,
};

const StyledTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  font-size: 16px;
  font-weight: 700;
`;

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

function PostList() {
  return (
    <>
      <StyledArea>
        <StyledTitle>게시글</StyledTitle>
        <StyledButton>글쓰기</StyledButton>
      </StyledArea>
      <StyledArea>
        <SearchInput />
        <DropDown />
      </StyledArea>
      <StyledPostArea>
        <StyledArea>
          <StyledPostTitle>{post.title}</StyledPostTitle>
          <StyledImageWrapper src={post.image} alt="게시글 첨부 이미지" />
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
            <StyledNickname>{post.writer.nickname}</StyledNickname>
            <StyledDate>{DateTrimmer(post.createdAt)}</StyledDate>
          </StyledBottomLeftArea>
          <StyledBottomRightArea>
            <Image
              unoptimized={true}
              width={20}
              height={17}
              src="/image/heart_inactive.png"
              alt="좋아요 아이콘"
            />
            <StyledLikeCount>{post.likeCount}</StyledLikeCount>
          </StyledBottomRightArea>
        </StyledArea>
      </StyledPostArea>
    </>
  );
}

export default PostList;
