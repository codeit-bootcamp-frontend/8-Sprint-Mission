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

interface PostTypes extends PostListProps {
  isLiked: boolean;
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
