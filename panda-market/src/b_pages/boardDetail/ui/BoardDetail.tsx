import {
  BoardDetailComments,
  BoardDetailContent,
} from '@/c_widget/boardDetail';

import * as S from './BoardDetail.style';

export const BoardDetail = () => {
  return (
    <S.Wrapper>
      <BoardDetailContent />
      <BoardDetailComments />
    </S.Wrapper>
  );
};
