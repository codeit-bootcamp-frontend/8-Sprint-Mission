export interface ICommentWriter {
  id: number;
  nickname: string;
  image: string;
}

export interface IProductComment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: ICommentWriter;
}
