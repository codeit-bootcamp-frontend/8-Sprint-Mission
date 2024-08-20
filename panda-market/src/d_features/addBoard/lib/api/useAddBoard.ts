import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { addBoard, AddBoardParams } from '@/entities';
import { QUERY_KEYS, ROUTER_PATH, useModal } from '@/f_shared';

export const useAddBoard = () => {
  const router = useRouter();
  const {} = useModal({});
  const mutate = useMutation({
    mutationKey: [QUERY_KEYS.BOARD.ADD],
    mutationFn: ({ title, content, image }: AddBoardParams) =>
      addBoard({ title, content, image }),
  });

  return ({ title, content }: Omit<AddBoardParams, 'image'>) =>
    async ({ image }: Pick<AddBoardParams, 'image'>) => {
      if (image) {
        await mutate.mutateAsync(
          { title, content, image },
          {
            onSuccess: (data) => {
              if (data) {
                router.push(ROUTER_PATH.BOARD.detail(data.id));
              }
            },
            onError: (error) => {
              console.log(error);
            },
          },
        );
      } else {
        await mutate.mutateAsync(
          { title, content },
          {
            onSuccess: (data) => {
              if (data) {
                router.push(ROUTER_PATH.BOARD.detail(data.id));
              }
            },
            onError: (error) => {
              console.log(error);
            },
          },
        );
      }
    };
};
