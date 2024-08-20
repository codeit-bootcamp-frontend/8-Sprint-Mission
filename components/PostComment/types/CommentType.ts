export interface CommentType {
  id: number;
  content: string;
  createAt: string | Date;
  updateAt: string | Date;
  length: number;
  writer: {
    id: number;
    image: string;
    nickname: string;
  };
}
