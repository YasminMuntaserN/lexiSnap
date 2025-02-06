import styled from "styled-components";
import Translation from "./Translation";
import Definitions from "./Definitions";
import Statements from "./Statements";
import Operation from "./Operation";

const OperationContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
gap: 20px;
margin: 10px;
`;

function WordOperations(){

  return(
    <OperationContainer>
      <Translation />
      <Definitions/>
      <Statements/>
      <Operation type="synonyms"/>
      <Operation type="opposites"/>
      <Operation type="tags"/>
</OperationContainer>
  )
}

export default WordOperations;