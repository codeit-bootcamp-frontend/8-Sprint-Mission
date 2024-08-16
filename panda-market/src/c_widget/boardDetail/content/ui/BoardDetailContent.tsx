import { useContext } from 'react';
import { BoardItemContent } from '@/d_features/getBoardItemContent';
import { BoardDetailContext } from '@/f_shared';

export const BoardDetailContent = () => {
  const ctx = useContext(BoardDetailContext);

  const { title, content, createdAt, likeCount, writer } = ctx!;

  return (
    <>
      <BoardItemContent
        title={title}
        content={content}
        writerName={writer?.nickname}
        createdAt={createdAt}
        likeCount={likeCount}
      />
    </>
  );
};
