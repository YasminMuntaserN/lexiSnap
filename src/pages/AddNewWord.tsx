import styled from "styled-components";
import Page from "../ui/Page";
import { BiSave } from "react-icons/bi";
import { useState } from "react";
import WordOperations from "../components/Word/WordOperations";
import { Icon } from "../ui/Icon";
import { media } from "../styledComponents/Media";

const Container=styled.div`
  /* padding: 70px; */
`;
const Input=styled.textarea`
  margin:10px;
  padding:10px;
  font-size:18px;
  border:none;
  outline:none;
  min-height:70px;
  border-radius:12px;
  ${media.mobile` width:280px;`}
  ${media.tablet` width:310px;`}
  ${media.largeTablet` width:330px;`}
  ${media.desktop` width:350px;`}
`;
function AddNewWord(){
  const [inputValue, setInputValue] = useState("");

  return (
    <Page>
      <Container>
        <div style={{ display: "flex", gap: "70px" }}>
          <h1>Add New Word</h1>
          {inputValue.length > 0 && <Icon as={BiSave} style={{ fontSize: "32px", marginTop: "10px" }} />}
        </div>
        <Input
          type="text"
          placeholder="Write the word here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <WordOperations />
      </Container>
    </Page>
  )
}

export default AddNewWord;