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
  background-color: ${({ added }) => (added ? "var(--color-dark-gray)" : "#ececf3")};
  padding: 10px;
  font-size: 18px;
  padding-left: 50px;
  border-radius: 10px;
  color: ${({ added }) => (added ? "var(--main-color)" : "var(--background-color-two)")};
  cursor: ${({ added }) => (added ? "default" : "pointer")};
  pointer-events: ${({ added }) => (added ? "none" : "auto")};

  &:hover {
    background-color:var(--color-dark-gray);
    color: var(--main-color);
  }
`;
interface TagsListProps {
  showTagsList: boolean;
  type: string;
  setShowTagsList: (show: boolean) => void;
}

function TagsList({ showTagsList, type, setShowTagsList }: TagsListProps) {
  const { mutate: getTags, Tags, isLoading: TagsLoading, error: TagsError } = useGetTags();
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
          setIsAdded((prev) => ({ ...prev, [index]: true }));
        }
      });
    }
  }, [Tags, word.tags, type]);

  const handleClick = (index: number, tagName: string, Id: string) => {
    if (showTagsList) {
      setTagWordsId(Id);
      setSearchInfo(prev => ({ ...prev, tagId: Id }));
    } else {
      setIsAdded((prev) => ({
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
      {TagsLoading && <Loader />}
      {TagsError && <p>Error loading tags...</p>}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {showTagsList && (
          <Button style={{ fontSize: "32px" }} variant="Link" onClick={() => setShowTagsList(false)}>
            <HiArrowLeftCircle />
          </Button>
        )}
        <h2>All Tags You Added:</h2>
      </div>
      {Tags?.map((tag, index) => (
        <Text
          key={index}
          added={isAdded[index]}
          onClick={() => !isAdded[index] && handleClick(index, tag.name, tag._id)}
        >
          <p>
            <FaHashtag style={{ color: "var(--main-color)", fontSize: "20px", marginRight: "20px" }} />
            {tag.name}
          </p>
          <p>{tag.wordsCount === 0 ? "Empty" : `${tag.wordsCount} words`}</p>
          {isAdded[index] && <MdOutlineBookmarkAdded style={{ color: "green", fontSize: "27px" }} />}
        </Text>
      ))}
    </Container>
  );
}

export default TagsList;