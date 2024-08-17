import { useMutation } from '@tanstack/react-query';
import { addBoard, AddBoardParams } from '@/entities';
import { QUERY_KEYS } from '@/f_shared/config/';

export const useAddBoard = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.BOARD.ADD],
    mutationFn: ({ title, content, image }: AddBoardParams) =>
      addBoard({ title, content, image }),
  });
};
