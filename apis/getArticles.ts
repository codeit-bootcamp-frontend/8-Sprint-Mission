import { ARTICLES_QUERY_KEY } from '@/constants/queryKeys';
import { axiosInstance } from './setupAxios';

type orderType = 'like' | 'recent';

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

export interface GetArticlesProps {
  page?: string;
  order?: orderType;
  keyword?: string;
  size?: string;
}

const getArticles = async ({
  page = '1',
  order = 'recent',
  size = '10',
  keyword = '',
}: GetArticlesProps): Promise<ArticlesResponse> => {
  const { data } = await axiosInstance.get(
    `/${ARTICLES_QUERY_KEY}?page=${page}&pageSize=${size}&orderBy=${order}&keyword=${keyword}`
  );

  return data;
};

export default getArticles;
