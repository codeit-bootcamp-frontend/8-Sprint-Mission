import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../store/AuthContext";
import { signIn } from "../utils/http";

export default function useLogin() {
  const { setIsLoggedIn, setErrorMessage } = useAuth();

  return useMutation<LoginResponseReturnType, Error, LoginType>({
    mutationFn: (data) => signIn(data),
    onSuccess: (res) => {
      setIsLoggedIn(true);
      localStorage.setItem("userId", res.user.id);
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });
}
