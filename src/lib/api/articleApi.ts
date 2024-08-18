import {
  ArticleListRequest,
  ArticleListResponse,
  AddArticleRequest,
  Article,
  ArticleDetailRequest,
  ArticleDetailResponse,
  AddArticleCommentRequest,
  ArticleComment,
} from '@type/ArticleTypes';
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
    console.error('error: ', error);
  }
};

export const getArticle = async ({ ...params }: ArticleDetailRequest) => {
  try {
    const response = await axiosInstance<ArticleDetailResponse>({
      method: 'GET',
      url: `/articles/${params.articleId}`,
    });
    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.error('error: ', error);
  }
};

export const addArticle = async ({ ...params }: AddArticleRequest) => {
  if (!params) return;
  try {
    const response = await axiosInstance<Article>({
      method: 'POST',
      url: '/articles',
      data: params,
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error('error: ', error);
  }
};

export const addArticleComment = async ({
  ...params
}: AddArticleCommentRequest) => {
  try {
    const response = await axiosInstance<ArticleComment>({
      method: 'POST',
      url: `/articles/${params.articleId}/comments`,
      data: { content: params.content },
    });
    if (response.status === 200) return response;
  } catch (error) {
    console.error('error: ', error);
  }
};
