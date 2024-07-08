import Button from 'components/@shared/Button';
import React, { useState } from 'react';
import styled from 'styled-components';
import { inputStyle, placeholderStyle } from 'styles/auth/formStyles';

const WARNING_SENTENCE =
  '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.';

function CommentForm() {
  const [value, setValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 나중에 네트워크로 작성된 코멘트 전송
    setValue('');
  };

  const handleChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target as HTMLTextAreaElement;
    setValue(value);
    setIsEmpty(value === '' ? true : false);
  };

  return (
    <StyledInputForm onSubmit={handleSubmitForm}>
      <p>문의하기</p>
      <textarea value={value} placeholder={WARNING_SENTENCE} onChange={handleChangeTextarea} />
      <Button type={'submit'} $category={'medium'} height={'4.2rem'} width={'7.4rem'} disabled={isEmpty}>
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
