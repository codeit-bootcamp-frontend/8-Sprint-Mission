export default interface Article {
  id: number;
  title: string;
  createdAt: Date;
  image: string;
  likeCount: number;
  writer: {
    nickname: string;
  };
}
