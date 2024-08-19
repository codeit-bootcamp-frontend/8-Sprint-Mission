import FormatRelativeTime from "@/utils/FormatRelativeTime";
import styled from "styled-components";

const comment = {
  writer: {
    image: "/image/product_img_default.png",
    nickname: "송경민",
    id: 12,
  },
  updatedAt: "2024-08-19T13:44:29.935Z",
  createdAt: "2024-08-19T13:44:29.935Z",
  content: "잔기스 있나요?",
  id: 1,
};

const StyledSection = styled.section`
  margin-top: 100px;
  border-bottom: 1px solid var(--gray-200);
  background-color: var(--gray-20);
`;
const StyledList = styled.ul`
  padding: 0;
`;
const StyledListItem = styled.li`
  list-style-type: none;
`;
const StyledContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 24px;
`;
const StyledBottomSection = styled.section`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const StyledWriterImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const StyledNickname = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;
const StyledTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-400);
  margin: 0;
`;

interface Comment {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

function ArticleCommentList() {
  if (!comment) {
    return (
      <div className="empty-comment">
        <img src="/image/img_inquiry_empty.png" alt="No comments" />
        <p>아직 문의가 없습니다.</p>
      </div>
    );
  }
  return (
    <div>
      <StyledSection>
        <StyledList>
          <StyledListItem key={comment.id}>
            <StyledContent>{comment.content}</StyledContent>
            <StyledBottomSection>
              <StyledWriterImg src={comment.writer.image} alt="프로필 이미지" />
              <StyledInfo>
                <StyledNickname>{comment.writer.nickname}</StyledNickname>
                <StyledTime>
                  <FormatRelativeTime time={comment.updatedAt} />
                </StyledTime>
              </StyledInfo>
            </StyledBottomSection>
          </StyledListItem>
        </StyledList>
      </StyledSection>
    </div>
  );
}

export default ArticleCommentList;
