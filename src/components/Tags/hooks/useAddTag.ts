import { useMutation } from "@tanstack/react-query";
import { AddTag } from "../../../services/TagApi";

export function useAddTag(){
  const { mutate, data: Tag, status, error } = useMutation({
    mutationFn:AddTag,
    mutationKey:["Tag"]
  });

  return { mutate , data: Tag,  isLoading: status === "pending", error };
}
