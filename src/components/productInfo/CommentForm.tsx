import Button from 'components/@shared/Button';
import styled from 'styled-components';
import { inputStyle, placeholderStyle } from 'styles/auth/formStyles';

const WARNING_SENTENCE =
  '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.';

function CommentForm() {
  return (
    <StyledInputForm>
      <p>문의하기</p>
      <textarea placeholder={WARNING_SENTENCE} />
      <Button $category={'medium'} height={'4.2rem'} width={'7.4rem'}>
        등록
      </Button>
    </StyledInputForm>
  );
}

export default CommentForm;

const StyledInputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & p {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.909rem;
    color: var(--cool-gray-900);
  }

  & textarea {
    ${inputStyle};
    height: 10.4rem;
    padding: 1.6rem 2.4rem;

    &::placeholder {
      ${placeholderStyle};
      line-height: 1.6rem;
    }
  }

  & button {
    /* 버튼 자체 우측 정렬 */
    margin-left: auto;
  }
`;
