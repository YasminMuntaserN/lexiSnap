import { useMutation } from "@tanstack/react-query";
import { signInWithGoogle } from "../services/GoogleLogin";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signInWithGoogle,
    onSuccess: (data) => {
      loginUser(data.data);
      console.log(data);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
    mutationKey: ["login"]
  });

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isError: mutation.isError,
    data: mutation.data
  };
}
