import { uploadImage } from '@/entities';
import { ImageUploadParams } from '@/entities/image/types';
import { QUERY_KEYS } from '@/f_shared/config';
import { useMutation } from '@tanstack/react-query';

interface ImageUploadProps {
  onSuccess: () => void;
  onError: () => void;
}

export const useImageUpload = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.IMAGE.UPLOAD],
    mutationFn: ({ image }: ImageUploadParams) => uploadImage({ image }),
    onSuccess: (data, variable, context) => {
      console.log(data);
      console.log(variable);
      console.log(context);
    },
  });
};
