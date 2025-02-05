import { useMutation } from "@tanstack/react-query";
import { getTags } from "../../../services/TagApi";

export function useGetTags(){
  
  const { mutate, data: Tags, status, error } = useMutation({
    mutationFn:getTags,
    mutationKey:["Tag"]
  });

  return { mutate , Tags,  isLoading: status === "pending", error };
}
