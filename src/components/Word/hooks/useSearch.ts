import { useMutation } from "@tanstack/react-query";
import { search } from "../../../services/BaseApi";

interface SearchParams {
  query: string;
  page: number;
}

export function useSearch() {
  const { mutate, data: wordList, status, error } = useMutation({
    mutationFn: ({ query, page }: SearchParams) => search(query, page),
    mutationKey: ["search"],
  });

  return { mutate, data: wordList, isLoading: status === "pending", error };
}
