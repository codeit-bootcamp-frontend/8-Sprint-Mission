import { useState } from 'react';
import { BtnSmall, TextArea } from '@/f_shared';

import * as S from './CommentForm.style';

export const CommentForm = () => {
  const [commentInput, setCommentInput] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentInput(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputContainer>
        <S.Label htmlFor="boardComment">댓글달기</S.Label>
        <TextArea
          mode="default"
          id="boardComment"
          name="boardComment"
          value={commentInput}
          onChange={handleChange}
          placeholder="댓글을 입력해주세요."
        />
      </S.InputContainer>
      <BtnSmall
        $size="40"
        $style="default"
        onClick={() => {}}
        isDisabled={false}
      >
        등록
      </BtnSmall>
    </S.Form>
  );
};
