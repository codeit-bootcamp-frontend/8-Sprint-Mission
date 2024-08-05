export interface CommentWriter {
  image: string;
  nickname: string;
  id: number;
}

export interface CommentRequest {
  content: string;
}

export interface CommentResponse {
  writer: CommentWriter;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}
