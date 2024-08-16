import { CommentForm } from '@/d_features/createCommet';
import { BoardComments } from '@/d_features/getBoardComments';

import * as S from './BoardDetailComments.style';

export const BoardDetailComments = () => {
  return (
    <S.Wrapper>
      <CommentForm />
      <BoardComments />
    </S.Wrapper>
  );
};
