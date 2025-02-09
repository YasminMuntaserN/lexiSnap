import { useMutation } from "@tanstack/react-query";
import { getWord, getWords, updateWord } from "../../../services/WordApi";
import { useWord } from "../../../context/WordContext";

export function useGetWords() {
  const { sortBy, sortOrder, WordsPage, setWordsTotalPages } = useWord();

  const { mutate, data, status, error } = useMutation({
    mutationFn: () => getWords(WordsPage, sortBy, sortOrder), 
    mutationKey: ["word"],
    onSuccess: (data) => setWordsTotalPages(data.totalPages),
  });

  return { mutate, words :data?.data, isLoading: status === "pending", error };
}


export function useGetWord(){
  const { mutate, data: word, status, error } = useMutation({
    mutationFn:(id :string)=>getWord(id),
    mutationKey:["word"]
  });

  return { mutate , word,  isLoading: status === "pending", error };
}


export function useUpdateWord() {
  const { mutate, data, status, error } = useMutation({
    mutationFn: ({ id, data }) => updateWord(id, data), 
    mutationKey: ["updateWord"],
  });

  return { mutate, updatedWord: data, isLoading: status === "pending", error };
}
