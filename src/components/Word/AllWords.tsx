import styled from "styled-components";
import ScrollContainer from "../../ui/ScrollContainer";
import Word from "./Word";
import { media } from "../../styledComponents/Media";

const WordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;

  ${media.mobile`
    gap: 15px;
    padding: 5px;
  `}

  ${media.tablet`
    gap: 18px;
    padding: 8px;
  `}
`;


function AllWords({ words }) {
  return (
    <ScrollContainer useFor="words" size="big">
      <WordsContainer>
        {words?.map((word, index) => (
          <Word key={index} word={word} />
        ))}
      </WordsContainer>
    </ScrollContainer>
  );
}

export default AllWords;
