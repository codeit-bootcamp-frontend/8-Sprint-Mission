import { ArticleListRequest, ArticleListResponse } from '@type/ArticleTypes';
import axiosInstance from './axios';

export const getArticles = async ({ ...params }: ArticleListRequest) => {
  try {
    const response = await axiosInstance<ArticleListResponse>({
      method: 'GET',
      url: '/articles',
      params: params,
    });
    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.error('server error: ', error);
  }
};
