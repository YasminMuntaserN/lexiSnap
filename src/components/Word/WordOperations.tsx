import styled from "styled-components";
import Translation from "./Translation";
import Definitions from "./Definitions";
import Statements from "./Statements";
import Operation from "./Operation";
import { useWord } from "../../context/WordContext";

const OperationContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
gap: 20px;
margin: 10px;
`;

function WordOperations(){
  const {isShowMode ,word}=useWord();
  return(
    <OperationContainer>
    {(word.translations.length !== 0 ||isShowMode )   && <Translation />}
    {(word.definitions.length !== 0 ||isShowMode )   &&  <Definitions/>}
    {(word.statements.length !== 0 ||isShowMode )   &&  <Statements/>}
    {(word.synonyms.length !== 0 ||isShowMode )   &&  <Operation type="synonyms"/>}
    {(word.opposites.length !== 0 ||isShowMode )   &&  <Operation type="opposites"/>}
    {(word.tags.length !== 0 ||isShowMode )   &&  <Operation type="tags"/>}
  </OperationContainer>
  )
}

export default WordOperations;