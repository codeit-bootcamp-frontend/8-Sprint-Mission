import { CommentResponse } from "DTO/comment";
import { ArticleId } from "DTO/article";
import defalutItemImg from "assets/images/img_item_default.png";
import defalutProfileIc from "assets/icons/ic_profile.png";

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

export const DEFAULT_IMAGE_URL = "https://example.com/...";

export const DEFAULT_ITEM_IMAGE = defalutItemImg;

export const DEFAULT_PROFILE_ICON = defalutProfileIc;
