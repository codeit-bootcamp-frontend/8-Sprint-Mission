import { CreateArticleCommentsData } from '@/entities';
import { createBoardComments } from '@/entities/comment/createBoardComments';
import { useMutation } from '@tanstack/react-query';

export const useCreateComment = () => {
  return useMutation({
    mutationFn: ({ articleId, content }: CreateArticleCommentsData) =>
      createBoardComments({ articleId, content }),
  });
};
