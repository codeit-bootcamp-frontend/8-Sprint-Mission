interface Writer {
  nickname: string;
  id: number;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  writer: Writer;
  updatedAt: string;
  createdAt: string;
}
