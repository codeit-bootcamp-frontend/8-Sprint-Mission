interface PostListProps {
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

interface OptionType {
  orderBy: "recent" | "like";
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

export type { PostListProps, IPostList, AllPropsListProps, OptionType };
