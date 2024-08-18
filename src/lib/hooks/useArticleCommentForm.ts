import { addArticleComment } from '@lib/api/articleApi';
import { useEffect, useState } from 'react';

const useArticleCommentForm = () => {
  const [comment, setComment] = useState<string>('');
  const [articleId, setArticleId] = useState<number>(0);

  const addComment = async () => {
    await addArticleComment({ content: comment, articleId: articleId });
  };

  return { setComment, setArticleId, addComment };
};

export default useArticleCommentForm;
