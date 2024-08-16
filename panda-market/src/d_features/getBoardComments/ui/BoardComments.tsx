import Image from 'next/image';
import { match } from 'ts-pattern';
import { Comment } from '@/entities';
import { CommentItem } from './CommentItem';

import EmptyImage from '@/f_shared/assets/images/empty_comment/empty_comment@2x.png';

import * as S from './BoardComments.style';

const DefaultComments = () => {
  return (
    <S.DefaultWrapper>
      <S.DefaultContentContainer>
        <S.DefaultImageContainer>
          <Image src={EmptyImage} alt="빈 댓글" width={140} height={140} />
        </S.DefaultImageContainer>
        <S.DefaultText>
          아직 댓글이 없어요, <br />
          지금 댓글을 달아보세요!
        </S.DefaultText>
      </S.DefaultContentContainer>
    </S.DefaultWrapper>
  );
};

interface BoardCommentsProps {
  commentList: Comment[];
}

type CommentListMatchType = { type: 'empty' } | { type: 'exist' };

export const BoardComments = ({ commentList }: BoardCommentsProps) => {
  const commentListMatch: CommentListMatchType = {
    type: commentList.length > 0 ? 'exist' : 'empty',
  };
  const commentsContents = match(commentListMatch)
    .with({ type: 'exist' }, () => (
      <>
        {commentList.map((e) => {
          return (
            <>
              <CommentItem
                key={e.id}
                content={e.content}
                createdAt={e.createdAt}
                writer={e.writer}
              />
            </>
          );
        })}
      </>
    ))
    .with({ type: 'empty' }, () => (
      <>
        <DefaultComments />
      </>
    ))
    .exhaustive();
  return <S.Wrapper>{commentsContents}</S.Wrapper>;
};
