import { useState } from "react";
import { Operation } from "../../styledComponents/Operation";
import { Icon } from "../../ui/Icon";
import { RiAddLine } from "react-icons/ri";
import { Input } from "../../styledComponents/Input";
import { Text } from "../../ui/Text";
import { useWord } from "../../context/WordContext";
import { InfoBox  ,Info} from "../../styledComponents/InfoBox";

function Definitions() {
  const [isAdd, setIsAdd] = useState(false);
  const {updateWord ,word ,isShowMode}= useWord();

  return (
    <>
    <Operation> 
      <Text>Definitions</Text>
      {isShowMode && <Icon as={RiAddLine} onClick={() => setIsAdd((prev) => !prev)} />}
      {isAdd && (
        <Input 
          placeholder="Write a definitions here.."
          action={(e)=>updateWord({definitions: [e.target.value.trim()]})}
        />
      )}
    </Operation>
          <InfoBox>
          {
            word.definitions.map((definition ,index)=> <Info key={index}>{definition}</Info>)
          }
          </InfoBox>
    </>
  );
}

export default Definitions;