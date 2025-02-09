import styled from "styled-components";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { useWord } from "../../context/WordContext";
import { useGetTag } from "../Tags/hooks/useGetTags";
import { Button } from "../../styledComponents/Button";
import {Loader} from "../../ui/Loader";
import ScrollContainer from "../../ui/ScrollContainer";
import { useWordList } from "./hooks/useWordList";
import SearchBar from "../../ui/SearchBar";


const Text = styled.div<{ added: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${({ added }) => (added ? "#4c4c56" : "#ececf3")};
  padding: 10px;
  font-size: 18px;
  padding-left: 50px;
  border-radius: 10px;
  color: ${({ added }) => (added ? "var(--main-color)" : "var(--background-color-two)")};
  cursor: ${({ added }) => (added ? "default" : "pointer")};
  pointer-events: ${({ added }) => (added ? "none" : "auto")};

  &:hover {
    background-color:#4c4c56;
    color: var(--main-color);
  }
`;

interface WordsListProps {
  type: string;
  TagId?: string;
  setTagWordsId?: (id: string) => void;
  onBack?: () => void;
}

function WordsList({ type, TagId, setTagWordsId, onBack }: WordsListProps) {
  const { wordList :words, isLoading : wordsLoading, error: wordsError ,mutate:getWords ,searchInfo} = useWordList();
  const { mutate: getTagWords, Tag, isLoading: TagWordsLoading, error: TagWordsError } = useGetTag();
  const [isAdded, setIsAdded] = useState<{ [key: number]: boolean }>({});
  const { updateWord, word ,SetIsShowMode ,WordsPage } = useWord();
  const isTagWords = TagId !== undefined;
  const WordsList = isTagWords ? Tag?.relatedWords : words;

  useEffect(() => {
    if (isTagWords) {
      getTagWords(TagId);
    } else {
      getWords();
    }
  }, [getWords, getTagWords, isTagWords, TagId ,WordsPage]);

  useEffect(() => {
    if (WordsList) {
      WordsList.forEach((w, index) => {
        if (word[type]?.includes(w.word)) {
          setIsAdded((prev) => ({ ...prev, [index]: true }));
        }
      });
    }
  }, [WordsList, word, type]);

  const handleClick = (index: number, word: string ,_id: number) => {
    setIsAdded((prev) => ({
      ...prev,
      [index]: true,
    }));
    updateWord({ [type]: [...(word[type] || []), { _id  , word}] });
    SetIsShowMode(true);
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (setTagWordsId) {
      setTagWordsId("");
    }
  };

  return (
    <ScrollContainer useFor="words">
      <SearchBar
        style={{ width: "100%" }}
        placeholder={`Search for a ${type}...`}
        type={type}
      />
      {(wordsLoading || TagWordsLoading) && <Loader />}
      {(wordsError || TagWordsError) && <p>Error loading words...</p>}
      {isTagWords && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button style={{ fontSize: "32px" }} variant="Link" onClick={handleBack}>
            <HiArrowLeftCircle />
          </Button>
          <h3>All Words In {Tag?.name}</h3>
        </div>
      )}
    {(searchInfo?.isEmpty && searchInfo?.isSearch )?
        (
        <p style={{ textAlign: "center", fontSize: "18px", color: "gray" }}>
        No words found.
        </p>
    ):
    (WordsList?.length > 0 &&  WordsList?.map((word, index) => (
        <Text
          key={index}
          added={isAdded[index] || false}
          onClick={() => !isAdded[index] && handleClick(index, word.word ,word._id)}
        >
          <p>{word.word}</p>
          <p>{word.firstTranslation}</p>
          {isAdded[index] && <MdOutlineBookmarkAdded style={{ color: "green", fontSize: "27px" }} />}
        </Text>
      ))
    )}
    </ScrollContainer>
  );
}

export default WordsList;