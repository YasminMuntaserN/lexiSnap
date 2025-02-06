import styled from "styled-components";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { useGetWords } from "./hooks/useGetWords";
import { useEffect, useState } from "react";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { useWord } from "../../context/WordContext";
import { useGetTag } from "../Tags/hooks/useGetTags";
import { Button } from "../../styledComponents/Button";
import {Loader} from "../../ui/Loader";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 400px;
  padding: 20px;
  margin: 10px;
  gap: 15px;
`;

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
  const { mutate: getWords, words, isLoading: wordsLoading, error: wordsError } = useGetWords();
  const { mutate: getTagWords, Tag, isLoading: TagWordsLoading, error: TagWordsError } = useGetTag();
  const [isAdded, setIsAdded] = useState<{ [key: number]: boolean }>({});
  const { updateWord, word } = useWord();
  const isTagWords = TagId !== undefined;
  const WordsList = isTagWords ? Tag?.relatedWords : words;

  useEffect(() => {
    if (isTagWords) {
      getTagWords(TagId);
    } else {
      getWords();
    }
  }, [getWords, getTagWords, isTagWords, TagId]);

  useEffect(() => {
    if (WordsList) {
      WordsList.forEach((w, index) => {
        if (word[type]?.includes(w.word)) {
          setIsAdded((prev) => ({ ...prev, [index]: true }));
        }
      });
    }
  }, [WordsList, word, type]);

  const handleClick = (index: number, word: string) => {
    setIsAdded((prev) => ({
      ...prev,
      [index]: true,
    }));
    updateWord({ [type]: [...(word[type] || []), word] });
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (setTagWordsId) {
      setTagWordsId("");
    }
  };

  return (
    <Container>
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
      {WordsList?.map((word, index) => (
        <Text
          key={index}
          added={isAdded[index] || false}
          onClick={() => !isAdded[index] && handleClick(index, word.word)}
        >
          <p>{word.word}</p>
          <p>{word.firstTranslation}</p>
          {isAdded[index] && <MdOutlineBookmarkAdded style={{ color: "green", fontSize: "27px" }} />}
        </Text>
      ))}
    </Container>
  );
}

export default WordsList;