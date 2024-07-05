import Image from 'components/@shared/Image';
import Spacer from 'components/@shared/Spacer';
import styled from 'styled-components';
import { IProductComment } from 'types/@shared/productInfoTypes';

function Comment({ content, updatedAt, writer }: Pick<IProductComment, 'content' | 'updatedAt' | 'writer'>) {
  return (
    <StyledCommentContainer>
      <p>{content}</p>
      <StyledCommentWriter>
        <Image src={writer.image} alt={'프로필 이미지'} height={'4rem'} width={'4rem'} />
        <StyledWriterInfo>
          <span>{writer.nickname}</span>
          <small>{updatedAt}</small>
        </StyledWriterInfo>
      </StyledCommentWriter>
      <Spacer $topHeight={'2.4rem'} $bottomHeight={'2.4rem'} $needLine={true} />
    </StyledCommentContainer>
  );
}

export default Comment;

const StyledCommentContainer = styled.article`
  & p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.24rem;
    margin-bottom: 2.4rem;
    color: var(--cool-gray-800);
  }
`;

const StyledCommentWriter = styled.figure`
  display: flex;
  gap: 0.8rem;
`;

const StyledWriterInfo = styled.div`
  font-weight: 400;

  & span {
    display: block;
    font-size: 1.4rem;
    line-height: 1.671rem;
    color: var(--cool-gray-600);
    margin-bottom: 0.4rem;
  }

  & small {
    font-size: 1.2rem;
    line-height: 1.432rem;
    color: var(--cool-gray-400);
  }
`;
