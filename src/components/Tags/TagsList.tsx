import styled from "styled-components";
import { useEffect, useState } from "react";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { useGetTags } from "./hooks/useGetTags";
import { useWord } from "../../context/WordContext";
import WordsList from "../Word/WordsList";
import { Button } from "../../styledComponents/Button";
import { HiArrowLeftCircle } from "react-icons/hi2";
import {Loader} from "../../ui/Loader";
import { media } from "../../styledComponents/Media";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height:400px;
  padding: 20px;
  gap: 15px;

  ${media.mobile`
    padding: 10px;
    max-height: 200px;
    gap: 10px;
  `}

  ${media.tablet`
    padding: 15px;
    max-height: 300px;
    gap: 12px;
  `}
`;

const TagCard = styled.div<{ added: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ added }) => 
    added ? "var(--color-dark-gray)" : "var(--color-box-background)"};
  padding: 15px;
  border-radius: 12px;
  color: ${({ added }) => 
    added ? "var(--main-color)" : "var(--text-color)"};
  cursor: ${({ added }) => added ? "default" : "pointer"};
  pointer-events: ${({ added }) => added ? "none" : "auto"};
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-dark-gray);
    color: var(--main-color);
    transform: translateY(-2px);
  }

  ${media.mobile`
    padding: 12px;
    font-size: 14px;
  `}

  ${media.tablet`
    padding: 14px;
    font-size: 16px;
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

const Title = styled.h2`
  font-size: 24px;
  color: var(--text-color);

  ${media.mobile`
    font-size: 20px;
  `}

  ${media.tablet`
    font-size: 22px;
  `}
`;

interface TagsListProps {
  showTagsList: boolean;
  type: string;
  setShowTagsList: (show: boolean) => void;
}

function TagsList({ showTagsList, type, setShowTagsList }: TagsListProps) {
  const { Tags, isLoading, error, getTags } = useGetTags();
  const [isAdded, setIsAdded] = useState<{ [key: number]: boolean }>({});
  const [TagWordsId, setTagWordsId] = useState<string>("");
  const { updateWord, word, setSearchInfo } = useWord();

  useEffect(() => {
    getTags();
  }, [getTags]);

  useEffect(() => {
    if (Tags && type === "tags") {
      Tags.forEach((t, index) => {
        if (word.tags?.some(tag => 
          typeof tag === 'string' ? tag === t.name : tag.name === t.name
        )) {
          setIsAdded(prev => ({ ...prev, [index]: true }));
        }
      });
    }
  }, [Tags, word.tags, type]);

  const handleClick = (index: number, tagName: string, Id: string) => {
    if (showTagsList) {
      setTagWordsId(Id);
      setSearchInfo(prev => ({ ...prev, tagId: Id }));
    } else {
      setIsAdded(prev => ({
        ...prev,
        [index]: true,
      }));
      updateWord({ tags: [...(word.tags || []), { id: Id, name: tagName }] });
    }
  };

  if (TagWordsId !== "") {
    return (
      <WordsList
        type={type}
        TagId={TagWordsId}
        onBack={() => {
          setTagWordsId("");
          setSearchInfo(prev => ({ ...prev, tagId: "" }));
          if (showTagsList) {
            setShowTagsList(true);
          }
        }}
      />
    );
  }

  return (
    <Container>
      <Header>
        {showTagsList && (
          <Button 
            variant="Link" 
            onClick={() => setShowTagsList(false)}
            style={{ fontSize: "32px" }}
          >
            <HiArrowLeftCircle />
          </Button>
        )}
        <Title>All Tags You Added</Title>
      </Header>

      {isLoading && <Loader />}
      {error && <p>Error loading tags...</p>}

      {Tags?.map((tag, index) => (
        <TagCard
          key={index}
          added={isAdded[index]}
          onClick={() => !isAdded[index] && handleClick(index, tag.name, tag._id)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaHashtag style={{ color: "var(--main-color)" }} />
            <span>{tag.name}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>{tag.wordsCount === 0 ? "Empty" : `${tag.wordsCount} words`}</span>
            {isAdded[index] && (
              <MdOutlineBookmarkAdded 
                style={{ 
                  color: "var(--color-green)", 
                  fontSize: "24px"
                }} 
              />
            )}
          </div>
        </TagCard>
      ))}
    </Container>
  );
}

export default TagsList;
