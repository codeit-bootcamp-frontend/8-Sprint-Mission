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

export default interface CommentType {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  writer: {
    nickname: string;
  };
}
