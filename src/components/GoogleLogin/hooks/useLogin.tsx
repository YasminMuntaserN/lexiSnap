import { useMutation } from "@tanstack/react-query";
import { signInWithGoogle } from "../../../services/GoogleLogin";
import { useUser } from "../../../context/UserContext";

export function useLogin(){
  const {loginUser} =useUser();

  const { mutate, data: user, status, error } = useMutation({
    mutationFn:signInWithGoogle,
    onSuccess: (data) => {
      loginUser(data.data);
    },
    mutationKey:["login"]
  });

  return { mutate , data: user,  isLoading: status === "pending", error };
}
