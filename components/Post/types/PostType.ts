interface PostListProps {
  id: number | string;
  content: string;
  image: string | null;
  likeCount: number;
  title: string;
  updatedAt: string | Date;
  createdAt: string | Date;
  writer: {
    id: number;
    nickname: string;
  };
}

interface PostTypes {
  id: number;
  title: string;
  content: string;
  updatedAt?: string | Date;
  createdAt: string | Date;
  image: string;
  isLiked: boolean;
  likeCount: number;
  writer: {
    id: string;
    nickname: string;
  };
}

interface OptionType {
  orderBy: 'recent' | 'like';
  keyword?: string | undefined;
  pageSize?: string | number;
  page?: number;
}

interface IPostList {
  postList: PostListProps;
}

interface AllPropsListProps {
  initialPosts: PostListProps[];
}

export type {
  PostListProps,
  PostTypes,
  IPostList,
  AllPropsListProps,
  OptionType,
};
