import { useState } from "react";
import { Icon } from "../../ui/Icon";
import { RiAddLine } from "react-icons/ri";
import { Input } from "../../styledComponents/Input";
import { Text } from "../../ui/Text";
import { useWord } from "../../context/WordContext";
import { InfoBox  ,Info} from "../../styledComponents/InfoBox";
import styled from "styled-components";
import { media } from "../../styledComponents/Media";
import { ActionBar } from "../../styledComponents/ActionBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  
  ${media.mobile`
    gap: 12px;
  `}
`;
const InputWrapper = styled.div<{ isVisible: boolean }>`
  max-height: ${props => props.isVisible ? '200px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;


function Definitions() {
  const [inputValue, setInputValue] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const { updateWord, word, isShowMode } = useWord();

  const handleSubmit = () => {
    if (inputValue.trim().length > 0) {
      updateWord({ definitions: [inputValue.trim()] });
      setInputValue("");
      setIsAdd(false);
    }
  };

  return (
    <Container>
      <ActionBar>
        <Text>Definitions</Text>
        {isShowMode && (
          <Icon 
            as={RiAddLine} 
            onClick={() => setIsAdd(prev => !prev)}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              transform: isAdd ? "rotate(45deg)" : "none"
            }}
          />
        )}
      </ActionBar>

      <InputWrapper isVisible={isAdd}>
        <Input 
          placeholder="Write a definition here..."
          onChange={(e) => setInputValue(e.target.value)}
          action={handleSubmit}
          value={inputValue}
        />
      </InputWrapper>

      <InfoBox>
        {word.definitions.map((definition, index) => (
          <Info key={index}>{definition}</Info>
        ))}
      </InfoBox>
    </Container>
  );
}

export default Definitions;
