import { Article } from '@/entities/articles';
import { useDateForm } from '@/f_shared/lib';
import { UserProfile } from '@/f_shared/ui';

import LikeIcon from '@/f_shared/assets/icons/ic_heart/inactive_heart.svg';

import * as S from './BoardItem.style';
import { Img } from '@/f_shared/ui/image';

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
  const { formedDate } = useDateForm({
    dateStr: updatedAt,
    formType: 'format',
    formatStr: 'YYYY.MM.DD',
  });

  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.Content>
          {title.length > 36 ? title.slice(0, 35) + '...' : title}
        </S.Content>
        <S.ImageWrapper>
          <Img src={image} alt="게시글 이미지" />
        </S.ImageWrapper>
      </S.ContentContainer>
      <S.SubContentContainer>
        <S.ProfileContainer>
          <UserProfile width="1.5rem" height="1.5rem" />
          <S.Nickname>{writerNickname}</S.Nickname>
          <S.CreatedAt>{formedDate}</S.CreatedAt>
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
