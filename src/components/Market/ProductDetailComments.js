import styled from "styled-components";
import { device } from "../../assets/styles/device";

import noCommentsImg from "../../assets/images/img_no_comments.png";

import elapsedTimeCalc from "../../utils/elapsedTimeCalc";

const CommentsContainer = styled.ol`
  width: 1200px;
  margin: 0 auto;

  @media screen and (${device.tablet}) {
    width: auto;
    margin: 0 24px;
  }

  @media screen and (${device.mobile}) {
    margin: 0 16px;
  }
`;

// Comments가 없는 경우
const NoCommentImg = styled.img`
  display: block;
  width: 200px;
  height: 224px;
  margin: 0 auto 24px;
`;

// Comments가 있는 경우
const CommentContainer = styled.li`
  width: 100%;
  margin: 24px 0;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--cool-gray-200);

  &:last-child {
    margin-bottom: 40px;
  }
`;

const CommentContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 24px;
`;

const CommentInfoContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const CommentUserPfp = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
`;

const CommentInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CommentUserNickname = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;

const CommentElapseTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: var(--cool-gray-400);
`;

function ProductDetailComments({ comments }) {
  return (
    <CommentsContainer>
      {comments.length > 0 ? (
        comments.map((comment) => {
          const {
            writer: { nickname, image },
            content,
            updatedAt,
          } = comment;

          return (
            <CommentContainer key={comment.id}>
              <CommentContent>{content}</CommentContent>
              <CommentInfoContainer>
                <CommentUserPfp src={image} alt="유저 프로필 이미지" />
                <CommentInfoTextContainer>
                  <CommentUserNickname>{nickname}</CommentUserNickname>
                  <CommentElapseTime>
                    {elapsedTimeCalc(updatedAt)}
                  </CommentElapseTime>
                </CommentInfoTextContainer>
              </CommentInfoContainer>
            </CommentContainer>
          );
        })
      ) : (
        <NoCommentImg src={noCommentsImg} alt="문의 없음 이미지" />
      )}
    </CommentsContainer>
  );
}

export default ProductDetailComments;
