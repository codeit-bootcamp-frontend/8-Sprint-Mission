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
  ownerId: string;
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

interface LoginType {
  email: string;
  password: string;
}

interface RegisterType {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

interface LoginResponseReturnType {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    image: null;
    nickname: string;
    updatedAt: Date;
    createdAt: Date;
  };
}
