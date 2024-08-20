// address.ts
export const API_ENDPOINTS = {
  getArticles: (
    page: number,
    pageSize: number,
    orderBy?: string,
    keyword?: string
  ): string => {
    const orderByQuery = orderBy ? `&orderBy=${orderBy}` : "";
    const keywordQuery = keyword ? `&keyword=${keyword}` : "";
    return `/articles?page=${page}&pageSize=${pageSize}${orderByQuery}${keywordQuery}`;
  },
  getArticle: (articleId: number): string => `/articles/${articleId}`,
  getComments: (articleId: number, limit: number): string =>
    `/articles/${articleId}/comments?limit=${limit}`,
};
