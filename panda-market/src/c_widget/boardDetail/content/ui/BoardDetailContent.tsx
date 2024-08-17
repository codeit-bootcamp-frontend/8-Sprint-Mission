import { useContext } from 'react';
import { BoardItemContent } from '@/d_features/getBoardItemContent';
import { BoardDetailContext } from '@/f_shared';

export const BoardDetailContent = () => {
  const { boardData } = useContext(BoardDetailContext);

  const { title, content, createdAt, likeCount, writer } = boardData;

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
