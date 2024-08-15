import { AddBoardForm } from '@/c_widget/addBoard';
import { ConfirmModal } from '@/f_shared/ui';

import * as S from './AddBoard.style';
import { useModal } from '@/f_shared/lib';

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
