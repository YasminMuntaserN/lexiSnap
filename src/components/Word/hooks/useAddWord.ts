import { useMutation } from "@tanstack/react-query";
import { AddWord } from "../../../services/WordApi";

export function useAddWord(){
  const { mutate, data: word, status, error } = useMutation({
    mutationFn:AddWord,
    mutationKey:["word"]
  });

  return { mutate , data: word,  isLoading: status === "pending", error };
}
