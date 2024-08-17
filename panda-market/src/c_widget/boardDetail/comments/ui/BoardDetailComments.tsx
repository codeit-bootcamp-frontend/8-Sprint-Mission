import { useContext } from 'react';
import { CommentForm } from '@/d_features/createCommet';
import { BoardComments } from '@/d_features/getBoardComments';
import { BoardDetailContext } from '@/f_shared';

import * as S from './BoardDetailComments.style';

export const BoardDetailComments = () => {
  const { boardComments } = useContext(BoardDetailContext);
  return (
    <S.Wrapper>
      <CommentForm />
      <BoardComments commentList={boardComments.list} />
    </S.Wrapper>
  );
};
