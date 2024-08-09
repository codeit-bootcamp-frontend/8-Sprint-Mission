import Image from 'next/image';

import { Article } from '@/entities/articles';
import { useDateForm } from '@/shared/lib';

import LikeIcon from '@/shared/assets/icons/ic_heart/inactive_heart.svg';
import ProfileIcon from '@/shared/assets/icons/ic_profile/ic_profile.svg';

import * as S from './BoardItem.style';

type BoardItemProps = Pick<
  Article,
  'image' | 'title' | 'likeCount' | 'updatedAt'
> & {
  writerNickname: string;
};

export const BoardItem = ({
  title,
  image,
  likeCount,
  writerNickname,
  updatedAt,
}: BoardItemProps) => {
  const { formDate } = useDateForm({ dateTime: updatedAt });
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.Content>
          {title.length > 36 ? title.slice(0, 35) + '...' : title}
        </S.Content>
        <S.ImageWrapper>
          <Image src={image} alt="게시글 이미지" fill />
        </S.ImageWrapper>
      </S.ContentContainer>
      <S.SubContentContainer>
        <S.ProfileContainer>
          <S.ProfileImageWrapper>
            <ProfileIcon />
          </S.ProfileImageWrapper>
          <S.Nickname>{writerNickname}</S.Nickname>
          <S.CreatedAt>{formDate}</S.CreatedAt>
        </S.ProfileContainer>
        <S.LikeContainer>
          <S.LikeIconWrapper>
            <LikeIcon />
          </S.LikeIconWrapper>
          <S.LikeCounter>{likeCount}</S.LikeCounter>
        </S.LikeContainer>
      </S.SubContentContainer>
    </S.Wrapper>
  );
};
