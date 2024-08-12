export interface PostListProps {
  id: number | string;
  content: string;
  image: string;
  likeCount: number;
  title: string;
  updatedAt?: string;
  createdAt?: string;
  writer: {
    id: number;
    nickname: string;
  };
}
