import { AddBoardHeader } from '@/c_widget/addBoard/header';
import * as S from './AddBoard.style';
import { AddBoardForm } from '@/c_widget/addBoard/forms';

export const AddBoard = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <AddBoardHeader />
        <AddBoardForm />
      </S.Content>
    </S.Wrapper>
  );
};
