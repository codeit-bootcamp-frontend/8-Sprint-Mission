// types/article.ts
export interface Article {
  id: number;
  title: string;
  image?: string;
  writer: {
    nickname: string;
  };
  createdAt: string;
  likeCount: number;
  content?: string;
}
