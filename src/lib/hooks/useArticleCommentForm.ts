import { addArticleComment } from '@lib/api/articleApi';
import { useState } from 'react';

const useArticleCommentForm = () => {
  const [comment, setComment] = useState<string>('');

  const addComment = async () => {
    await addArticleComment({ content: comment });
  };

  return { setComment, addComment };
};

export default useArticleCommentForm;
