export interface PostListProps {
  id: number | string;
  content: string;
  image: string;
  likeCount: number;
  title: string;
  updatedAt: string | Date;
  createdAt: string | Date;
  writer: {
    id: number;
    nickname: string;
  };
}
