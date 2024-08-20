import { Comment } from '@/entities';
import {
  BtnLike,
  Dropdown,
  Img,
  ITEM_DROPDOWN_CONTENTS,
  useDateForm,
} from '@/f_shared';

import * as S from './BoardItemContent.style';

interface BoardItemContent {
  title: string;
  content: string;
  likeCount: number;
  writer: Comment['writer'];
  createdAt: string;
}

export const BoardItemContent = ({
  title,
  content,
  likeCount,
  writer,
  createdAt,
}: BoardItemContent) => {
  const { formedDate } = useDateForm({
    dateStr: createdAt,
    formType: 'format',
    formatStr: 'YYYY.MM.DD',
  });
  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
          <Dropdown
            mode="kebab"
            contentList={ITEM_DROPDOWN_CONTENTS}
            onContentClick={() => {}}
          />
        </S.TitleContainer>
        <S.WriterContainer>
          <S.WriterInfo>
            <S.ProfileContainer>
              <Img imgType="profile" src={writer.image} alt="프로필" />
            </S.ProfileContainer>
            <S.WriterName>{writer.nickname}</S.WriterName>
            <S.CreatedAt>{formedDate}</S.CreatedAt>
          </S.WriterInfo>
          <BtnLike likeCount={likeCount} onClick={() => {}} />
        </S.WriterContainer>
      </S.Header>
      <S.DescriptionContainer>
        <S.Description>{content}</S.Description>
      </S.DescriptionContainer>
    </S.Wrapper>
  );
};
