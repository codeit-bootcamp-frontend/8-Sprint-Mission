import { BtnLike, useDayForm, UserProfile } from '@/f_shared';

import * as S from './BoardItemContent.style';

interface BoardItemContent {
  title: string;
  content: string;
  likeCount: number;
  writerName: string;
  createdAt: string;
}

export const BoardItemContent = ({
  title,
  content,
  likeCount,
  writerName,
  createdAt,
}: BoardItemContent) => {
  const { formedDate } = useDayForm({
    dateStr: createdAt,
    formType: 'format',
    formatStr: 'YYYY.MM.DD',
  });
  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
        </S.TitleContainer>
        <S.WriterContainer>
          <S.WriterInfo>
            <UserProfile height="2.5rem" width="2.5rem" />
            <S.WriterName>{writerName}</S.WriterName>
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
