export interface CommentType {
  createdAt: string;
  updatedAt: string;
  writer: WriterType;
  content: string;
  id: number;
}

interface WriterType {
  id: number;
  nickname: number;
  image: string;
}

export interface CommentListPropsType {
  comments: CommentType[];
}
export interface CommentPropsType {
  comment: CommentType;
}
