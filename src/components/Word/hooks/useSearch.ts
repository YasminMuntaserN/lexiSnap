import { useMutation } from "@tanstack/react-query";
import { search } from "../../../services/BaseApi";

interface SearchParams {
  query: string;
  page: number;
  tag?: string;
}

export function useSearch() {
  const { mutate, data: wordList, status, error } = useMutation({
    mutationFn: ({ query, page ,tag}: SearchParams) => search(query, page ,tag),
    mutationKey: ["search"],
  });

  return { mutate, data: wordList, isLoading: status === "pending", error };
}
