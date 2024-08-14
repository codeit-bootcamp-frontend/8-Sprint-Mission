import Image from 'next/image';
import { BestBadge } from '@/f_shared/ui';
import { Article } from '@/entities/articles';
import { useDateForm } from '@/f_shared/lib';

// import ActiveHeart from '@/shared/assets/icons/ic_heart/active_heart.svg';
import InactiveHeart from '@/shared/assets/icons/ic_heart/inactive_heart.svg';

import * as S from './BoardCard.style';

type BoardCardProps = Pick<
  Article,
  'title' | 'image' | 'createdAt' | 'likeCount'
> & {
  writerNickname: string;
};

export const BoardCard = ({
  title,
  image,
  likeCount = 0,
  writerNickname,
  createdAt,
}: BoardCardProps) => {
  const { formDate } = useDateForm({ dateTime: createdAt });
  return (
    <S.Wrapper>
      <S.ContentsWrapper>
        <BestBadge />
        <S.Contents>
          <S.Title>
            {title.length > 36 ? title.slice(0, 35) + '...' : title}
          </S.Title>
          <S.ImageWrapper>
            <Image src={image} alt="게시글 사진" fill />
          </S.ImageWrapper>
        </S.Contents>
        <S.SubContents>
          <S.NickName>{writerNickname}</S.NickName>
          <S.LikeWrapper>
            <S.LikeIcon>
              <InactiveHeart />
            </S.LikeIcon>
            <S.LikeCount>{likeCount}</S.LikeCount>
          </S.LikeWrapper>
          <S.CreatedAt>{formDate}</S.CreatedAt>
        </S.SubContents>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
};
