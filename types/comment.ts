export interface WriterTypes {
  image?: string;
  nickname?: string;
  id: number;
}

export interface CommentTypes {
  writer: WriterTypes;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

export interface CommentListTypes {
  nextCursor: number;
  list: CommentTypes[];
}
