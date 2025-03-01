import styled from "styled-components";
import Translation from "./Translation";
import Definitions from "./Definitions";
import Statements from "./Statements";
import Operation from "./Operation";
import { media } from "../../styledComponents/Media";
import { useWord } from "../../context/WordContext";

const OperationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  ${media.mobile`
    padding: 15px;
    gap: 20px;
  `}

  ${media.tablet`
    padding: 15px;
    gap: 25px;
  `}
`;

const Section = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.3s ease forwards;
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function WordOperations() {
  const { isShowMode, word } = useWord();
  
  return (
    <OperationContainer>
      {(word.translations.length !== 0 || isShowMode) && (
        <Section>
          <Translation />
        </Section>
      )}
      {(word.definitions.length !== 0 || isShowMode) && (
        <Section>
          <Definitions />
        </Section>
      )}
      {(word.statements.length !== 0 || isShowMode) && (
        <Section>
          <Statements />
        </Section>
      )}
      {(word.synonyms.length !== 0 || isShowMode) && (
        <Section>
          <Operation type="synonyms" />
        </Section>
      )}
      {(word.opposites.length !== 0 || isShowMode) && (
        <Section>
          <Operation type="opposites" />
        </Section>
      )}
      {(word.tags.length !== 0 || isShowMode) && (
        <Section>
          <Operation type="tags" />
        </Section>
      )}
    </OperationContainer>
  );
}

export default WordOperations;
