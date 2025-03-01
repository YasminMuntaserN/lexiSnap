import styled from "styled-components";
import { GiSoundWaves } from "react-icons/gi";
import { speakWord } from "../../services/Speech";
import { Line } from "../../ui/Line";
import { useNavigate } from "react-router-dom";
import { media } from "../../styledComponents/Media";

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  color: var(--basic-background-color);
  gap: 15px;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  ${media.mobile`
    min-height: 80px;
    padding: 8px;
    gap: 10px;
  `}
`;

const SubContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 0.2fr;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  width: 100%;

  ${media.mobile`
    font-size: 16px;
    grid-template-columns: 1.2fr 1fr 0.2fr;
    gap: 10px;
  `}

  ${media.tablet`
    font-size: 18px;
    grid-template-columns: 1.5fr 1fr 0.2fr;
    gap: 15px;
  `}
`;

const WordText = styled.p`
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TranslationText = styled.p`
  color: var(--second-blue);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Statement = styled.div`
  margin-top: 5px;
  font-size: 16px;
  color: var(--color-gray);
  
  ${media.mobile`
    font-size: 14px;
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--second-blue);
  font-size: 36px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  ${media.mobile`
    font-size: 24px;
  `}
  
  ${media.tablet`
    font-size: 28px;
  `}
`;

interface WordProps {
  word: {
    _id: string;
    word: string;
    firstTranslation: string;
    firstStatement: string;
  };
}

function Word({ word }: WordProps) {
  const navigate = useNavigate();

  const handleSoundClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakWord(word.word);
  };

  return (
    <Container onClick={() => navigate(`/words/${word._id}`)}>
      <Line />
      <div style={{ width: "100%" }}>
        <SubContainer>
          <WordText>{word.word}</WordText>
          <TranslationText>{word.firstTranslation}</TranslationText>
          <IconWrapper>
            <GiSoundWaves onClick={handleSoundClick} />
          </IconWrapper>
        </SubContainer>
        <Statement>{word.firstStatement}</Statement>
      </div>
    </Container>
  );
}

export default Word;
