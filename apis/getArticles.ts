import { ARTICLES_QUERY_KEY } from '@/constants/queryKeys';
import { axiosInstance } from './setupAxios';

export type orderType = 'like' | 'recent';

export interface IArticle {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

interface ArticlesResponse {
  list: IArticle[];
  totalCount: number;
}

export interface GetArticlesParams {
  page?: number;
  size?: number;
  order?: orderType;
  keyword?: string;
}

const getArticles = async ({
  page = 1,
  order = 'recent',
  size = 10,
  keyword = '',
}: GetArticlesParams): Promise<ArticlesResponse> => {
  const params = new URLSearchParams({
    page: page.toString(),
    pageSize: size.toString(),
    orderBy: order,
    keyword,
  });

  try {
    const { data } = await axiosInstance.get(`/${ARTICLES_QUERY_KEY}?${params.toString()}`);
    return data;
  } catch {
    return { list: [], totalCount: 0 };
  }
};

export default getArticles;
