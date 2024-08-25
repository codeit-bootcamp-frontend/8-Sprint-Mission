import { addUser } from '@lib/api/AuthApi';
import { useMutation } from '@tanstack/react-query';
import { AddUserRequest } from '@type/AuthTypes';

const useSignUp = () => {
  const { mutate: signUp, ...returns } = useMutation({
    mutationKey: ['signup'],
    mutationFn: async ({ ...params }: AddUserRequest) => {
      return await addUser(params);
    },
    onSuccess: (res, req, context) => {
      console.log('useSignUp mutation success: ', res, req, context);
    },
    gcTime: 0,
  });

  return { signUp, ...returns };
};

export default useSignUp;
