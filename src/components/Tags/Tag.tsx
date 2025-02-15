import { FaHashtag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styledComponents/Media";

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
  ${media.mobile`
    width: 220px;
    `}
${media.tablet`
  width: 300px;
    `}
`;

const TagName = styled.p`
  font-size: 22px;
  margin: 0;
  ${media.mobile`
    font-size: 16px;
    `}
${media.tablet`
  font-size: 18px;
    `}
`;

const WordsCount = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: var(--text-color);
  margin: 0;
  ${media.mobile`
    font-size: 12px;
    `}
${media.tablet`
  font-size: 14px;
    `}
`;

const Icon = styled.div`
color: var(--main-color);
font-size:30px;
${media.mobile`
    font-size: 16px;
    `}
${media.tablet`
  font-size: 18px;
    `}
`

function Tag({ tag }) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/tags/${tag._id}`)}> 
      <Icon as={FaHashtag}  />
      <TagName>{tag.name}</TagName>
      <WordsCount>{tag.wordsCount === 0 ? "Empty" : `${tag.wordsCount} words`}</WordsCount>
    </Container>
  );
}

export default Tag;
