import { useEffect } from 'react';
import { useGetWords } from './useGetWords';
import { useWord } from '../../../context/WordContext';
import { useGetTag } from '../../Tags/hooks/useGetTags';

export function useWordList() {
  const { mutate: getWords, words, isLoading: wordsLoading, error: wordsError } = useGetWords();
  const { mutate: getTagWords, Tag, isLoading: TagWordsLoading, error: TagWordsError } = useGetTag();
  const { sortBy, sortOrder, WordsPage, searchInfo } = useWord();

  const wordList = searchInfo?.list?.length > 0 
    ? searchInfo.list 
    : searchInfo?.tagId !== "" 
      ? Tag?.relatedWords 
      : words;

  const isLoading = searchInfo?.isLoading || wordsLoading || TagWordsLoading;
  const error = searchInfo?.error || wordsError || TagWordsError;

  useEffect(() => {
    if (!searchInfo?.tagId) {
      getWords();
    }
  }, [getWords, sortBy, sortOrder, WordsPage, searchInfo?.tagId]);

  useEffect(() => {
    if (searchInfo?.tagId) {
      console.log(`searchInfo?.tagId ${searchInfo?.tagId}`)
      getTagWords(searchInfo.tagId);
    }
  }, [getTagWords, searchInfo?.tagId]);

  return {
    wordList,
    isLoading,
    error,
    Tag
  };
}