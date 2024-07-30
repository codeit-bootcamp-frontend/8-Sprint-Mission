import Button from 'components/@shared/Button';
import styled from 'styled-components';
import { StyledTitleText } from 'styles/market/textStyles';

interface RegistrationHeaderProps {
  isSubmitActive: boolean;
}

function RegistrationHeader({ isSubmitActive }: RegistrationHeaderProps) {
  return (
    <StyledAddItemHeader>
      <StyledAddItemTitle>상품 등록하기</StyledAddItemTitle>
      <Button type={'submit'} $category={'medium'} disabled={!isSubmitActive} height={'4.2rem'} width={'8.8rem'}>
        등록
      </Button>
    </StyledAddItemHeader>
  );
}

export default RegistrationHeader;

const StyledAddItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledAddItemTitle = styled.p`
  ${StyledTitleText};
  font-size: 2.8rem;
  line-height: 3.341rem;
  margin-bottom: 2.4rem;
`;
