import Image from 'next/image';

import bestBadge from '@/shared/assets/images/best_badge/img_badge@2x.png';

import * as S from './BestBadge.style';

export const BestBadge = () => {
  return (
    <S.Wrapper>
      <Image src={bestBadge} fill alt="베스트 뱃지" />
    </S.Wrapper>
  );
};
