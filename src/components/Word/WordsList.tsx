import styled from "styled-components";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { useWord } from "../../context/WordContext";
import { Button } from "../../styledComponents/Button";
import {Loader} from "../../ui/Loader";
import ScrollContainer from "../../ui/ScrollContainer";
import { useWordList } from "./hooks/useWordList";
import SearchBar from "../../ui/SearchBar";
import { media } from "../../styledComponents/Media";


const WordCard = styled.div<{ added: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ added }) => 
    added ? "var(--color-dark-gray)" : "var(--color-box-background)"};
  padding: 15px 20px;
  border-radius: 12px;
  color: ${({ added }) => 
    added ? "var(--main-color)" : "var(--background-color-two)"};
  cursor: ${({ added }) => added ? "default" : "pointer"};
  pointer-events: ${({ added }) => added ? "none" : "auto"};
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-dark-gray);
    color: var(--main-color);
    transform: translateY(-2px);
  }

  ${media.mobile`
    padding: 12px 15px;
    font-size: 14px;
  `}

  ${media.tablet`
    padding: 12px 15px;
    font-size: 16px;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 0 10px;

  ${media.mobile`
    padding: 0 5px;
    gap: 12px;
  `}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  ${media.mobile`
    margin-bottom: 15px;
    flex-direction: column;
    gap: 10px;
  `}
`;

const Title = styled.h3`
  font-size: 24px;
  color: var(--main-color);

  ${media.mobile`
    font-size: 20px;
  `}
`;

const EmptyState = styled.p`
  text-align: center;
  font-size: 18px;
  color: var(--color-gray);
  padding: 20px;

  ${media.mobile`
    font-size: 16px;
    padding: 15px;
  `}
`;

interface WordsListProps {
  type: string;
  TagId?: string;
  setTagWordsId?: (id: string) => void;
  onBack?: () => void;
}

function WordsList({ type, TagId, setTagWordsId, onBack }: WordsListProps) {
  const { wordList, isLoading, error, Tag } = useWordList();
  const [isAdded, setIsAdded] = useState<{ [key: number]: boolean }>({});
  const { updateWord, word, SetIsShowMode, searchInfo } = useWord();
  const isTagWords = TagId !== undefined;

  useEffect(() => {
    if (wordList) {
      wordList.forEach((w, index) => {
        if (word[type]?.some(item => 
          typeof item === 'string' 
            ? item === w.word 
            : item.word === w.word
        )) {
          setIsAdded(prev => ({ ...prev, [index]: true }));
        }
      });
    }
  }, [wordList, word, type]);

  const handleClick = (index: number, wordText: string, _id: number) => {
    setIsAdded(prev => ({
      ...prev,
      [index]: true,
    }));
    updateWord({ [type]: [...(word[type] || []), { _id, word: wordText }] });
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
      <ContentWrapper>
        <SearchBar
          placeholder={`Search for a ${type}...`}
          type={type}
        />

        {isLoading && <Loader />}
        {error && <EmptyState>Error loading words...</EmptyState>}

        {isTagWords && (
          <Header>
            <Button 
              variant="Link" 
              onClick={handleBack}
              style={{ fontSize: "32px" }}
            >
              <HiArrowLeftCircle />
            </Button>
            <Title>All Words In {Tag?.name}</Title>
          </Header>
        )}

        {(searchInfo?.isEmpty && searchInfo?.isSearch) ? (
          <EmptyState>No words found.</EmptyState>
        ) : (
          wordList?.map((word, index) => (
            <WordCard
              key={index}
              added={isAdded[index] || false}
              onClick={() => !isAdded[index] && handleClick(index, word.word, word._id)}
            >
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <p>{word.word}</p>
                <p style={{ color: 'var(--color-gray)' }}>{word.firstTranslation}</p>
              </div>
              {isAdded[index] && (
                <MdOutlineBookmarkAdded 
                  style={{ 
                    color: "var(--color-green)", 
                    fontSize: "24px"
                  }} 
                />
              )}
            </WordCard>
          ))
        )}
      </ContentWrapper>
    </ScrollContainer>
  );
}

export default WordsList;
