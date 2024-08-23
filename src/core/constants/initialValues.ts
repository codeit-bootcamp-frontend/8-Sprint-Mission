import { CommentResponse } from "core/dtos/commentDTO";
import { ArticleId } from "core/dtos/articleDTO";

export const INITIAL_PRODUCTID = {
  createdAt: "",
  favoriteCount: 0,
  ownerId: 0,
  images: [],
  tags: [],
  price: 0,
  description: "",
  name: "",
  id: 0,
  isFavorite: false,
};

export const INITIAL_COMMENTS: CommentResponse = {
  list: [
    {
      id: 0,
      content: "",
      createdAt: "",
      updatedAt: "",
      writer: {
        id: 0,
        nickname: "",
        image: "",
      },
    },
  ],
};

export const INITIAL_ARTICLE_ID: ArticleId = {
  createdAt: "",
  updatedAt: "",
  likeCount: 0,
  writer: {
    nickname: "",
    id: 0,
  },
  image: "",
  content: "",
  title: "",
  id: 0,
};

export const INITIAL_AUTH_RESPONSE = {
  accessToken: "",
  refreshToken: "",
  user: {
    id: "",
    email: "",
    image: null,
    nickname: "",
    updatedAt: "",
    createdAt: "",
  },
};
