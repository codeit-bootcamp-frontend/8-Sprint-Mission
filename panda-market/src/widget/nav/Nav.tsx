import { LargeLogo } from '@/shared/logos';
import { UserProfile } from '@/shared/userProfile';

import * as S from './Nav.style';
import largeLogo1x from '@/shared/assets/images/logos/main_logo@1x.png';

export const Nav = () => {
  return (
    <S.Wrapper>
      <S.Contents>
        <LargeLogo logoImage={largeLogo1x} />
        <S.Categories>
          <S.CategoryItem>자유게시판</S.CategoryItem>
          <S.CategoryItem>중고마켓</S.CategoryItem>
        </S.Categories>
        <S.UserProfile>
          <UserProfile />
        </S.UserProfile>
      </S.Contents>
    </S.Wrapper>
  );
};
