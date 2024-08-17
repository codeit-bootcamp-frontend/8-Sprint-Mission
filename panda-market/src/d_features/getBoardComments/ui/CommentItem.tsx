import { Comment } from '@/entities';
import { Dropdown, Img, ITEM_DROPDOWN_CONTENTS, useDateForm } from '@/f_shared';

import * as S from './CommentItem.style';

interface CommentItemProps {
  content: string;
  writer: Comment['writer'];
  createdAt: string;
}

export const CommentItem = ({
  content,
  writer,
  createdAt,
}: CommentItemProps) => {
  const { formedDate } = useDateForm({
    dateStr: createdAt,
    formType: 'fromNow',
  });
  return (
    <S.Wrapper>
      <S.CommentContainer>
        <S.CommentContent>{content}</S.CommentContent>
        <S.WriterContainer>
          <S.ProfileContainer>
            <Img src={writer.image ?? ''} alt="프로필 이미지" />
          </S.ProfileContainer>
          <S.WriterInfo>
            <S.WriterName>{writer.nickname}</S.WriterName>
            <S.CreatedAt>{formedDate}</S.CreatedAt>
          </S.WriterInfo>
        </S.WriterContainer>
      </S.CommentContainer>
      <Dropdown
        mode="kebab"
        contentList={ITEM_DROPDOWN_CONTENTS}
        onContentClick={() => {}}
      />
    </S.Wrapper>
  );
};
