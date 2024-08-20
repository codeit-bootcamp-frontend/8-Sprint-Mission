import { Article } from '@/entities';
import { Img, useDateForm } from '@/f_shared';

import LikeIcon from '@/f_shared/assets/icons/ic_heart/inactive_heart.svg';

import * as S from './BoardItem.style';

type BoardItemProps = Pick<
  Article,
  'image' | 'title' | 'likeCount' | 'updatedAt'
> & {
  // writerNickname: string;
  writer: Article['writer'];
};

export const BoardItem = ({
  title,
  image,
  likeCount,
  writer,
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
          <Img imgType="item" src={image} alt="게시글 이미지" />
        </S.ImageWrapper>
      </S.ContentContainer>
      <S.SubContentContainer>
        <S.ProfileContainer>
          {/* <UserProfile width="1.5rem" height="1.5rem" /> */}
          <S.ProfileImageWrapper>
            <Img imgType="profile" src={writer?.image} alt="유저 프로필" />
          </S.ProfileImageWrapper>
          <S.Nickname>{writer.nickname}</S.Nickname>
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
