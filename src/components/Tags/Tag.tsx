import { FaHashtag } from "react-icons/fa";
import styled from "styled-components";

const Container =styled.div`
display:flex;
  width :400px;
  height:70px;
  background-color :var(--color-background-gray);
  justify-content:space-between;
  padding:10px;
  justify-items:center;
  align-items:center;
  border-radius:15px;
  color:var(--basic-background-color);
`;

function Tag({tag}) {
  return (
    <Container >
      <FaHashtag style={{color:'var(--main-color)' , fontSize:"30px"}}/>
      <p style={{  fontSize:"22px"}}>{tag.name}</p>
      <p>{tag.wordsCount === 0 ?"Empty" :`${tag.wordsCount} word`}</p>
    </Container>
  );
}
  export default Tag;

  /*
      {
      "_id": "67a1cb7046c65d8588651d5e",
      "name": "firstTag",
      "creationDate": "2025-02-04T08:10:24.036Z",
      "wordsCount": 10,
      "statementsCount": 0,
      "itemsCount": 10
    }
  */