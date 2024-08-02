interface ProductProps {
  id: string | number;
  name: string;
  description?: string;
  price: number;
  images: string;
  tags?: string[];
  favoriteCount: number;
  isFavorite?: boolean;
  updateAt?: Date;
  createAt?: Date;
}

interface CommentProps {
  commentList: {
    content: string;
    createAt: Date;
    id: number;
    updatedAt: Date;
    length: number;
    writer: {
      id: string;
      nickname?: string;
      image: string;
    };
  }[];
}

type NavigationType = {
  path: string;
  name: string;
}[];
