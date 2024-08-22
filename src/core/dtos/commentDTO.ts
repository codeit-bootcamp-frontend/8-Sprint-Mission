export interface CommentWriter {
  image: string;
  nickname: string;
  id: number;
}

export interface CommentRequest {
  content: string;
}

export interface Comment {
  writer: CommentWriter;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

export interface CommentResponse {
  list: Comment[];
}
