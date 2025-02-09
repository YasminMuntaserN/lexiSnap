import { useEffect } from 'react';
import { useGetWords } from './useGetWords';
import { useWord } from '../../../context/WordContext';


export function useWordList() {
  const { mutate, words, isLoading: wordsLoading, error: wordsError } = useGetWords();
  const { sortBy, sortOrder, WordsPage, searchInfo } = useWord();

  const wordList = searchInfo?.list?.length > 0 ? searchInfo.list : words;
  const isLoading = searchInfo?.isLoading || wordsLoading;
  const error = searchInfo?.error || wordsError;

  useEffect(() => {
    mutate();
  }, [mutate, sortBy, sortOrder, WordsPage]);

  return {
    wordList,
    isLoading,
    error,
    searchInfo ,
    words,
    mutate
  };
}