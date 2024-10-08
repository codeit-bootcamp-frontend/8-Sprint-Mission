import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../store/AuthContext";
import { signUp } from "../utils/http";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { setErrorMessage } = useAuth();

  return useMutation<RegisterType, Error, RegisterType>({
    mutationFn: (data) => signUp(data),
    onSuccess: () => {
      navigate("/signin");
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });
}
