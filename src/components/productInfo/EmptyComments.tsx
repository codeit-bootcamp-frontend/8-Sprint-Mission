import emptyImg from 'assets/images/productDetail/inquiry-empty.png';
import Image from 'components/@shared/Image';
import styled from 'styled-components';

function EmptyComments() {
  return (
    <StyledEmptyCommentsSection>
      <Image src={emptyImg} alt={'코멘트가 없습니다'} height={'20rem'} width={'20rem'} />
      <p>아직 문의가 없습니다.</p>
    </StyledEmptyCommentsSection>
  );
}

export default EmptyComments;

const StyledEmptyCommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: var(--cool-gray-400);
  text-align: center;
`;
