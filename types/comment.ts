export interface IWriter {
  image?: string;
  nickname?: string;
  id: number;
}

export interface IComment {
  writer: IWriter;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

export interface ICommentList {
  nextCursor: number;
  list: IComment[];
}
