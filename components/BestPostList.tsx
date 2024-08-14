import Image from "next/image";
import DateTrimmer from "@/utils/TimeTrimmer";
import styled from "styled-components";

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

const StyledPostArea = styled.div`
  width: 384px;
  padding: 0px 24px;
  border-radius: 8px;
  background-color: var(--gray-50);
`;

const StyledPostTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--gray-800);
`;

const StyledTopArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledImageWrapper = styled.img`
  width: 72px;
  height: 72px;
  border: 1px solid var(--gray-200);
  border-radius: 6px;
  position: relative;
`;

const StyledBottomArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBottomLeftArea = styled.div`
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

function BestPostList() {
  return (
    <>
      <StyledTitle>베스트 게시글</StyledTitle>
      <StyledPostArea>
        <Image
          unoptimized={true}
          width={102}
          height={30}
          src="/image/best_badge.png"
          alt="베스트 게시글 뱃지"
        />
        <StyledTopArea>
          <StyledPostTitle>{post.title}</StyledPostTitle>
          <StyledImageWrapper src={post.image} alt="게시글 첨부 이미지" />
        </StyledTopArea>
        <StyledBottomArea>
          <StyledBottomLeftArea>
            <StyledNickname>{post.writer.nickname}</StyledNickname>
            <Image
              unoptimized={true}
              width={15}
              height={13}
              src="/image/heart_inactive.png"
              alt="좋아요 아이콘"
            />
            <StyledLikeCount>{post.likeCount}</StyledLikeCount>
          </StyledBottomLeftArea>
          <StyledDate>{DateTrimmer(post.createdAt)}</StyledDate>
        </StyledBottomArea>
      </StyledPostArea>
    </>
  );
}

export default BestPostList;
