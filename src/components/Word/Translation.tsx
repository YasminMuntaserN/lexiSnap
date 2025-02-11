import { useState } from "react";
import { Operation } from "../../styledComponents/Operation";
import { Icon } from "../../ui/Icon";
import { RiAddLine } from "react-icons/ri";
import { Input } from "../../styledComponents/Input";
import { Text } from "../../ui/Text";
import { useWord } from "../../context/WordContext";
import { Info, InfoBox } from "../../styledComponents/InfoBox";

function Translation() {
  const [isAdd, setIsAdd] = useState(false);
  
  const {updateWord ,word ,isShowMode}= useWord();
  return (
    <>
    <Operation> 
      <Text>Add a translation</Text>
      {isShowMode && <Icon as={RiAddLine} onClick={() => setIsAdd((prev) => !prev)} />}
      {isAdd && (
      <Input 
        placeholder="Add Translation..." 
        action={(e)=>updateWord({translations: 
          [(e.target as HTMLInputElement).value.trim()]})}
      />
      )}
    </Operation>
      <InfoBox>
      {
        word.translations.map((translation ,index)=> <Info key={index}>{translation}</Info>)
      }
      </InfoBox>
    </>
  );
}

export default Translation;
