import { ReactNode } from 'react';
import { Article, ArticleOrderBy } from './ArticleTypes';

export type BasicType = {
  title: string;
  id: number;
  name: string;
  updatedAt: Date;
  createdAt: Date;
  image: string;
  content: string;
  writer: { id: number; nickname: string };
  isRound: boolean;
  src: string;
  alt: string;
  className: string;
  likeCount: number;
  children: ReactNode;
  totalCount: number;
  page: number;
  pageSize: number;
  keyword: string;
  placeholder: string;
  options: { key: string; value: string }[];
  sortOptions: { key: ArticleOrderBy; label: string };

  // handler
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSortSelection: (key: string) => void;
  onSearch: (keyword: string) => void;

  //
  article: Article;
};
