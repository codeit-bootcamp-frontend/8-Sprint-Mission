import Link from 'next/link';

import { LargeLogo, UserProfile } from '@/f_shared/ui';
import { ROUTER_PATH } from '@/f_shared/config';

import largeLogo1x from '@/f_shared/assets/images/logos/main_logo@1x.png';

import * as S from './Nav.style';

export const Nav = () => {
  return (
    <S.Wrapper>
      <Link href={ROUTER_PATH.HOME}>
        <LargeLogo logoImage={largeLogo1x} />
      </Link>
      <S.Categories>
        <Link href={ROUTER_PATH.BOARD.default}>
          <S.CategoryItem>자유게시판</S.CategoryItem>
        </Link>
        <Link href={ROUTER_PATH.ITEM.default}>
          <S.CategoryItem>중고마켓</S.CategoryItem>
        </Link>
      </S.Categories>

      <UserProfile width="2.5rem" height="2.5rem" />
    </S.Wrapper>
  );
};
