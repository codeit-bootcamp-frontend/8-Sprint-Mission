import { createContext } from 'react';
import { Article, ArticleCommentsResponse } from '@/entities';

export interface BoardDetailContextType {
  boardData: Article;
  boardComments: ArticleCommentsResponse;
}

const INITIAL_BOARD: Article = {
  id: 0,
  title: '',
  content: '',
  image: '',
  createdAt: '',
  likeCount: 0,
  updatedAt: '',
  writer: {
    id: 0,
    nickname: '',
  },
};
const INITIAL_BOARD_COMMENTS: ArticleCommentsResponse = {
  list: [],
  nextCursor: 0,
};

export const BoardDetailContext = createContext<BoardDetailContextType>({
  boardData: INITIAL_BOARD,
  boardComments: INITIAL_BOARD_COMMENTS,
});
