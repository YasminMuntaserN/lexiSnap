import styled from "styled-components";
import { GiSoundWaves } from "react-icons/gi";
import { speakWord } from "../../services/Speech";
import { Line } from "../../ui/Line";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  color: var(--basic-background-color);
  gap: 15px;
  cursor: pointer;
`;


const SubContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 0.2fr; 
  align-items: center;
  gap: 20px;
  font-size: 20px;
`;

const WordText = styled.p`
  font-weight: bold;
`;

const TranslationText = styled.p`
  color: var(--second-blue);
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--second-blue);
`;

function Word({ word }) {
  const navigate =useNavigate()
  return (
    <Container  onClick={() => navigate(`/words/${word._id}`)}>
      <Line />
      <div style={{ width: "100%" }}>
        <SubContainer>
          <WordText>{word.word}</WordText>
          <TranslationText>{word.firstTranslation}</TranslationText>
          <IconWrapper>
            <GiSoundWaves size={36} onClick={() => speakWord(word.word)} />
          </IconWrapper>
        </SubContainer>
        <div style={{ fontSize: "16px", marginTop: "5px" }}>
          {word.firstStatement}
        </div>
      </div>
    </Container>
  );
}

export default Word;
