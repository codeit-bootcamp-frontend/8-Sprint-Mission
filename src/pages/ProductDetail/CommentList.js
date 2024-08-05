import { useParams } from "react-router-dom";
import { getCommentById } from "../../api";
import useFetch from "../../hooks/useFetch";
import emptyComment from "../../images/empty_comment_img.png";
import FormatRelativeTime from "../../utils/FormatRelativeTime";
import styled from "styled-components";

const StyledSection = styled.section`
  border-bottom: 1px solid var(--gray-200);
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
  width: 40px;
  height: 40px;
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

const StyledTime = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-400);
  margin: 0;
`;

function CommentList() {
  const { productId } = useParams();

  const {
    data: comments,
    error,
    loading,
  } = useFetch(async () => {
    const result = await getCommentById(productId);
    return result.list;
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (comments.length === 0) {
    return (
      <div className="empty-comment">
        <img src={emptyComment} alt="No comments" />
        <p>아직 문의가 없습니다.</p>
      </div>
    );
  }

  return (
    <div>
      <StyledSection>
        <StyledList>
          {comments.map(({ id, content, updatedAt, writer }) => (
            <StyledListItem key={id}>
              <StyledContent>{content}</StyledContent>
              <StyledBottomSection>
                <StyledWriterImg src={writer.image} alt="프로필 이미지" />
                <StyledInfo>
                  <StyledNickname>{writer.nickname}</StyledNickname>
                  <StyledTime>
                    <FormatRelativeTime time={updatedAt} />
                  </StyledTime>
                </StyledInfo>
              </StyledBottomSection>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledSection>
    </div>
  );
}

export default CommentList;
