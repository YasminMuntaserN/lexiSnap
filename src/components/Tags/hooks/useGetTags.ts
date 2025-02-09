import { useMutation } from "@tanstack/react-query";
import { getTags ,getTag } from "../../../services/TagApi";
import { useWord } from "../../../context/WordContext";


export function useGetTags() {
  const { setTagsTotalPages } = useWord();

  const { mutate, data, status, error } = useMutation({
    mutationFn:getTags,
    mutationKey:["Tag"],
    onSuccess: (data) => setTagsTotalPages(data.totalPages),
  });

  return { mutate , Tags :data?.data,  isLoading: status === "pending", error };
}


export function useGetTag(){
  const { mutate, data: Tag, status, error } = useMutation({
    mutationFn:(id :string)=>getTag(id),
    mutationKey:["Tag"]
  });

  return { mutate , Tag,  isLoading: status === "pending", error };
}