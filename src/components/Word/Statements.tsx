import { useState } from "react";
import { Icon } from "../../ui/Icon";
import { RiAddLine } from "react-icons/ri";
import { BiSave } from "react-icons/bi";
import { Input } from "../../styledComponents/Input";
import { Text } from "../../ui/Text";
import { useWord } from "../../context/WordContext";
import { InfoBox, Info } from "../../styledComponents/InfoBox";
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

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${media.mobile`
    gap: 8px;
  `}
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--color-gray);
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: var(--main-color);
  }
`;

const StatementCard = styled(Info)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 70px;
  padding: 12px 15px;

  ${media.mobile`
    padding: 10px 12px;
  `}
`;

function Statements() {
  const [isAdd, setIsAdd] = useState(false);
  const [statement, setStatement] = useState("");
  const [translation, setTranslation] = useState("");
  const [showTranslation, setShowTranslation] = useState<{ [key: number]: boolean }>({});
  const { updateWord, word, isShowMode } = useWord();

  const handleSave = () => {
    if (statement.trim() && translation.trim()) {
      updateWord({
        statements: [{ 
          text: statement.trim(), 
          translation: translation.trim() 
        }],
      });
      setStatement("");
      setTranslation("");
      setIsAdd(false);
    }
  };

  const toggleTranslation = (index: number) => {
    setShowTranslation(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Container>
      <ActionBar>
        <Text>Example Statements</Text>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
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
          {(statement || translation) && (
            <Icon
              as={BiSave}
              onClick={handleSave}
              style={{
                fontSize: "24px",
                cursor: "pointer",
                color: "var(--main-color)",
                transition: "transform 0.2s ease",
              }}
            />
          )}
        </div>
      </ActionBar>

      <InputGroup style={{ maxHeight: isAdd ? '400px' : '0' }}>
        <Input
          placeholder="Write a statement here..."
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
        />
        <Input
          placeholder="Write a statement translation here..."
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
        />
      </InputGroup>

      <InfoBox>
        {word.statements.map((statement, index) => (
          <StatementCard key={index}>
            <span>
              {showTranslation[index] ? statement.translation : statement.text}
            </span>
            <ToggleButton onClick={() => toggleTranslation(index)}>
              Show {showTranslation[index] ? "Statement" : "Translation"}
            </ToggleButton>
          </StatementCard>
        ))}
      </InfoBox>
    </Container>
  );
}

export default Statements;
