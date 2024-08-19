export interface Comment {
  updateAt?: string;
  createdAt: string;
  likeCount: number;
  image: string;
  content: string;
  title: string;
  nickname: string;
  id?: number;
}
