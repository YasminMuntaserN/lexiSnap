import { FaHashtag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styledComponents/Media";

const Container = styled.div`
  display: flex;
  width: 350px;
  height: 60px;
  background: var(--color-background-gray);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  border-radius: 15px;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-gray);
    transform: translateY(-2px);
  }

  ${media.mobile`
    width: 100%;
    height: 50px;
    padding: 10px;
  `}

  ${media.tablet`
    width: 300px;
    height: 55px;
    padding: 12px;
  `}
`;

const TagName = styled.p`
  font-size: 22px;
  margin: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

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
  padding-left: 10px;

  ${media.mobile`
    font-size: 14px;
  `}

  ${media.tablet`
    font-size: 15px;
  `}
`;

const Icon = styled.div`
  color: var(--main-color);
  font-size: 30px;
  margin-right: 10px;
  
  ${media.mobile`
    font-size: 20px;
  `}

  ${media.tablet`
    font-size: 24px;
  `}
`;

interface TagProps {
  tag: {
    _id: string;
    name: string;
    wordsCount: number;
  };
}

function Tag({ tag }: TagProps) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/tags/${tag._id}`)}>
      <Icon as={FaHashtag} />
      <TagName>{tag.name}</TagName>
      <WordsCount>
        {tag.wordsCount === 0 ? "Empty" : `${tag.wordsCount} words`}
      </WordsCount>
    </Container>
  );
}

export default Tag;
