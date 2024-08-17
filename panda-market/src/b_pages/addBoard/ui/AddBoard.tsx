import { AddBoardForm } from '@/c_widget/addBoard';

import * as S from './AddBoard.style';

export const AddBoard = () => {
  return (
    <>
      <S.Wrapper>
        <S.Content>
          <AddBoardForm />
        </S.Content>
      </S.Wrapper>
    </>
  );
};
