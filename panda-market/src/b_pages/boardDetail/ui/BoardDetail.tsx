import {
  BoardDetailComments,
  BoardDetailContent,
} from '@/c_widget/boardDetail';
import { LinkMedium, ROUTER_PATH } from '@/f_shared';

import BackIcon from '@/f_shared/assets/icons/ic_back/ic_back.svg';

import * as S from './BoardDetail.style';

export const BoardDetail = () => {
  return (
    <S.Wrapper>
      <BoardDetailContent />
      <BoardDetailComments />
      <LinkMedium href={ROUTER_PATH.BOARD.default}>
        <>
          목록으로 돌아가기
          <S.IconWrapper>
            <BackIcon />
          </S.IconWrapper>
        </>
      </LinkMedium>
    </S.Wrapper>
  );
};
