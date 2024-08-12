import { CommentResponse } from "DTO/comment";

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

export const INITIAL_COMMENTS: CommentResponse[] = [
  {
    id: 0,
    content: "",
    createdAt: "",
    updatedAt: "",
    writer: { id: 0, image: "", nickname: "" },
  },
];

export const DEFAULT_IMAGE_URL = "https://example.com/...";
