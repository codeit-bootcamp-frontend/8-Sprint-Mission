import Link from 'next/link';
import { useRouter } from 'next/router';

import { LargeLogo, UserProfile, ROUTER_PATH } from '@/f_shared';

import largeLogo1x from '@/f_shared/assets/images/logos/main_logo@1x.png';

import * as S from './Nav.style';

export const Nav = () => {
  const router = useRouter();
  const nowPath = router.asPath.split('/');
  return (
    <S.Wrapper>
      <Link href={ROUTER_PATH.HOME}>
        <LargeLogo logoImage={largeLogo1x} />
      </Link>
      <S.Categories>
        <Link href={ROUTER_PATH.BOARD.default}>
          <S.CategoryItem $isSelected={nowPath[1] === 'boards'}>
            자유게시판
          </S.CategoryItem>
        </Link>
        <Link href={ROUTER_PATH.ITEM.default}>
          <S.CategoryItem $isSelected={nowPath[1] === 'items'}>
            중고마켓
          </S.CategoryItem>
        </Link>
      </S.Categories>

      <UserProfile width="2.5rem" height="2.5rem" />
    </S.Wrapper>
  );
};
