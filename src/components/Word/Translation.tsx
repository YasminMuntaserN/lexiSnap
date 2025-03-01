import { useState } from "react";
import { Icon } from "../../ui/Icon";
import { RiAddLine } from "react-icons/ri";
import { Input } from "../../styledComponents/Input";
import { Text } from "../../ui/Text";
import { useWord } from "../../context/WordContext";
import { Info, InfoBox } from "../../styledComponents/InfoBox";
import { ActionBar } from "../../styledComponents/ActionBar";
import styled from "styled-components";
import { media } from "../../styledComponents/Media";

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

function Translation() {
  const [isAdd, setIsAdd] = useState(false);
  const [inputValue ,setInputValue]=useState("");
  
  const {updateWord ,word ,isShowMode}= useWord();

  return (
    <Container>
      <ActionBar>
      <Text>Add a translation</Text>
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
        placeholder="Add Translation..." 
        onChange={(e) =>setInputValue((e.target as HTMLInputElement).value.trim())}
        action={()=>inputValue.length > 0 && updateWord({ translations:  [inputValue]})}
        value ={inputValue}
      />
      </InputWrapper>

      <InfoBox>
      {
        word.translations.map((translation ,index)=> <Info key={index}>{translation}</Info>)
      }
      </InfoBox>
    </Container>
  );
}

export default Translation;