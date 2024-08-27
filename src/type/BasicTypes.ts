import { ReactNode, RefCallback } from 'react';
import { Article, ArticleOrderBy } from './ArticleTypes';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { RefCallBack } from 'react-hook-form';

export type BasicType = {
  title: string;
  id: number;
  name: string;
  nickname: string;
  updatedAt: Date;
  createdAt: Date;
  image: string;
  content: string;
  writer: { id: number; nickname: string; image?: string };
  isRound: boolean;
  src: string | StaticImport;
  alt: string;
  className: string;
  wrapperClassName: string;
  likeCount: number;
  children: ReactNode;
  totalCount: number;
  page: number;
  pageSize: number;
  keyword: string;
  placeholder: string;
  options: { key: string; value: string }[];
  sortOptions: { key: ArticleOrderBy; label: string };
  file: File | null;
  initialPreview: string;
  text: string;
  isTextarea: boolean;
  isLiked: boolean;
  articleId: number;
  inputType: React.InputHTMLAttributes<HTMLInputElement>['type'];
  email: string;
  password: string;
  passwordConfirmation: string;
  accessToken: string | null;
  refreshToken: string | null;
  inputId: string;
  inputName: string;
  inputRef: RefCallBack;
  label: string;
  errorMessage: string;

  // handler
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTextareaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeFile: (name: string, nextValue: File | null) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onTextareaKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onSortSelection: (key: string) => void;
  onSearch: (keyword: string) => void;
  onInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void;

  //
  article: Article;
};
