import { useMutation } from "@tanstack/react-query";
import { AddWord, deleteWord } from "../../../services/WordApi";

export function useAddWord(){
  const { mutate, data: word, status, error } = useMutation({
    mutationFn:AddWord,
    mutationKey:["word"]
  });

  return { mutate , data: word,  isLoading: status === "pending", error };
}


export function useDeleteWord(){
  const { mutate, data: wordDeleted, status, error } = useMutation({
    mutationFn:deleteWord,
    mutationKey:["word"]
  });

  return { mutate , data: wordDeleted,  isLoading: status === "pending", error };
}
