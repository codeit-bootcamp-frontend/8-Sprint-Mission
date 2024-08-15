import { BtnSmall, SectionTitle } from '@/f_shared/ui';
import * as S from './AddBoardHeader.style';

export const AddBoardHeader = () => {
  return (
    <S.Wrapper>
      <SectionTitle>게시글 쓰기</SectionTitle>
      <BtnSmall
        $size="40"
        $style="default"
        isDisabled={false}
        onClick={() => {}}
      >
        등록
      </BtnSmall>
    </S.Wrapper>
  );
};
