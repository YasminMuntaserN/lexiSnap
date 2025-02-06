import { FaHashtag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 350px;
  height: 60px;
  background: var(--color-background-gray);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-radius: 15px;
  color: #140435;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background:var( --color-gray);
  }
`;

const TagName = styled.p`
  font-size: 22px;
  margin: 0;
`;

const WordsCount = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: var(--text-color);
  margin: 0;
`;

function Tag({ tag }) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/tags/${tag._id}`)}> 
      <FaHashtag style={{ color: "var(--main-color)", fontSize: "30px" }} />
      <TagName>{tag.name}</TagName>
      <WordsCount>{tag.wordsCount === 0 ? "Empty" : `${tag.wordsCount} words`}</WordsCount>
    </Container>
  );
}

export default Tag;
