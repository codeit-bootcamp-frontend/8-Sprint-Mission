import {
  ArticleCommentsQuery,
  GetArticleCommentsSuccess,
} from '@/types/Article';
import instance from '.';

async function getCommentsByArticleId(
  articleId: string,
  query: ArticleCommentsQuery
) {
  const res = await instance.get<GetArticleCommentsSuccess>(
    `/articles/${articleId}/comments`,
    {
      params: query,
    }
  );
  return res;
}

export default getCommentsByArticleId;
