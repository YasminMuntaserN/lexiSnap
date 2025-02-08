import { useState } from "react";
import { Operation } from "../../styledComponents/Operation";
import { Icon } from "../../ui/Icon";
import { RiAddLine } from "react-icons/ri";
import { BiSave } from "react-icons/bi";
import { Input } from "../../styledComponents/Input";
import { Text } from "../../ui/Text";
import { useWord } from "../../context/WordContext";
import { InfoBox, Info } from "../../styledComponents/InfoBox";

function Statements() {
  const [isAdd, setIsAdd] = useState(false);
  const [statement, setStatement] = useState("");
  const [translation, setTranslation] = useState("");

  const [showTranslation, setShowTranslation] = useState<{ [key: number]: boolean }>({});

  const { updateWord, word ,isShowMode} = useWord();

  const toggleTranslation = (index: number) => {
    setShowTranslation((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Operation>
        <Text>Example Statements</Text>
        {isShowMode && <Icon as={RiAddLine} onClick={() => setIsAdd((prev) => !prev)} />}
        {(statement.length !== 0 || translation.length !== 0) && (
          <Icon
            as={BiSave}
            style={{ fontSize: "32px" }}
            onClick={() =>
              updateWord({
                statements: [{ text: statement.trim(), translation: translation.trim() }],
              })
            }
          />
        )}
        {isAdd && (
          <div>
            <Input
              placeholder="Write a statement here..."
              onChange={(e) => setStatement(e.target.value)}
            />
            <Input
              placeholder="Write a statement translation here..."
              onChange={(e) => setTranslation(e.target.value)}
            />
          </div>
        )}
      </Operation>

      <InfoBox>
        {word.statements.map((statement, index) => (
          <Info key={index} style={{ height: "70px" }}>
            <span>{showTranslation[index] ? statement.translation : statement.text}</span>
            <button
              onClick={() => toggleTranslation(index)}
              style={{ background: "none", border: "none", paddingTop: "10px", fontSize: "16px" }}
            >
              Show {showTranslation[index] ? "Statement" : "Translation"}
            </button>
          </Info>
        ))}
      </InfoBox>
    </>
  );
}

export default Statements;
