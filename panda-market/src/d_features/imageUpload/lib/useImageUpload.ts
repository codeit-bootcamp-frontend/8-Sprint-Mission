import { uploadImage } from '@/entities';
import { ImageResponse, ImageUploadParams } from '@/entities/image/types';
import { QUERY_KEYS } from '@/f_shared/config';
import { DefaultError, useMutation } from '@tanstack/react-query';

interface ImageUploadProps {
  onSuccess: () => void;
  onError: () => void;
}

export const useImageUpload = () => {
  const mutate = useMutation({
    mutationKey: [QUERY_KEYS.IMAGE.UPLOAD],
    mutationFn: ({ image }: ImageUploadParams) => uploadImage({ image }),
  });

  return async ({
    image,
    onSuccess,
    onError,
  }: ImageUploadParams & {
    onSuccess: (data: ImageResponse) => void;
    onError: (error: DefaultError) => void;
  }) => {
    return await mutate.mutateAsync(
      { image },
      {
        onSuccess: (data) => {
          onSuccess(data!);
        },
        onError,
      },
    );
  };
};
