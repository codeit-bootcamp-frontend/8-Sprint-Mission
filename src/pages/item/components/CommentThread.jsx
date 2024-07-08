import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProductComments } from '../../../API/itemApi.js';
import { ReactComponent as EmptyStateImage } from '../../../images/icons/empty-comments.svg';
import { ReactComponent as SeeMoreIcon } from '../../../images/icons/ic_kebab.svg';
import DefaultProfileImage from '../../../images/icons/ic_profile.svg';

const CommentContainer = styled.div`
  padding: 24px 0;
  position: relative;
`;

const SeeMoreButton = styled.button`
  position: absolute;
  right: 0;
`;

const CommentContent = styled.p`
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 24px;
`;

const AuthorProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Username = styled.p`
  color: var(--gray600);
  font-size: 14px;
  margin-bottom: 4px;
`;

const CommentItem = ({ item }) => {
  const authorInfo = item.writer;

  return (
    <CommentContainer>
      <SeeMoreButton>
        <SeeMoreIcon />
      </SeeMoreButton>

      <CommentContent>{item.content}</CommentContent>

      <AuthorProfile>
        <UserProfileImage
          src={authorInfo.image || DefaultProfileImage}
          alt={`${authorInfo.nickname}님의 프로필 사진`}
        />

        <div>
          <Username>{authorInfo.nickname}</Username>
        </div>
      </AuthorProfile>
    </CommentContainer>
  );
};

const EmptyStateContainer = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const EmptyStateText = styled.p`
  color: var(--gray400);
  font-size: 16px;
  line-height: 24px;
`;

const EmptyState = () => {
  return (
    <EmptyStateContainer>
      <EmptyStateImage />
      <EmptyStateText>아직 문의가 없습니다.</EmptyStateText>
    </EmptyStateContainer>
  );
};

const ThreadContainer = styled.div`
  margin-bottom: 40px;
`;

function CommentThread({ productId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!productId) return;
    const fetchComments = async () => {
      setIsLoading(true);
      const params = {
        limit: 10,
      };
      try {
        const data = await getProductComments({ productId, params });
        setComments(data.list);
        setError(null);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setError('상품의 댓글을 불러오지 못했어요.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchComments();
  }, [productId]);
  if (isLoading) {
    return <div>상품 댓글 로딩중...</div>;
  }
  if (error) {
    return <div>오류: {error}</div>;
  }
  if (comments && !comments.length) {
    return <EmptyState />;
  } else {
    return (
      <ThreadContainer>
        {comments.map((item) => (
          <CommentItem item={item} key={`comment-${item.id}`} />
        ))}
      </ThreadContainer>
    );
  }
}

export default CommentThread;
