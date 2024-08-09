import { ARTICLES_QUERY_KEY } from '@/constants/queryKeys';
import { axiosInstance } from './setupAxios';

type orderType = 'like' | 'recent';

export interface Article {
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
  list: Article[];
  totalCount: number;
}

export interface GetArticlesProps {
  page?: string;
  order?: orderType;
  keyword?: string;
  size?: number;
}

const getArticles = async ({
  page,
  order,
  size,
  keyword,
}: GetArticlesProps): Promise<ArticlesResponse> => {
  console.log(
    'process.env.NEXT_PUBLIC_APP_API_URL:',
    process.env.NEXT_PUBLIC_APP_API_URL
  );
  const { data } = await axiosInstance.get(
    `/${ARTICLES_QUERY_KEY}?page=${page}&pageSize=${size}&orderBy=${order}&keyword=${keyword}`
  );

  return data;
};

export default getArticles;
