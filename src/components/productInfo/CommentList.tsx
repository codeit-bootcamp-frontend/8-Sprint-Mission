import Image from 'components/@shared/Image';
import useProductCommentsQuery from 'queries/useProductCommentsQuery';
import { useParams } from 'react-router-dom';

import Comment from './Comment';
import backImg from 'assets/images/productDetail/back-icon.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EmptyComments from './EmptyComments';

function InquiryList() {
  const { id } = useParams();
  const {
    data: { list: comments },
  } = useProductCommentsQuery({ productId: id });

  return (
    <>
      {comments.length > 0 ? (
        comments.map(comment => (
          <Comment key={comment.id} content={comment.content} updatedAt={comment.updatedAt} writer={comment.writer} />
        ))
      ) : (
        <EmptyComments />
      )}
      <StyledBackLink to={'/items'}>
        목록으로 돌아가기
        <Image src={backImg} alt={'뒤로가기 아이콘'} height={'2.4rem'} width={'2.4rem'} />
      </StyledBackLink>
    </>
  );
}

export default InquiryList;

const StyledBackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 4rem;
  margin: 4rem auto 0 auto;

  background-color: var(--brand-blue);
  color: var(--white);

  width: 24rem;
  height: 4.8rem;

  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.4rem;
`;
