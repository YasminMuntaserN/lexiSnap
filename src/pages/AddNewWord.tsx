import styled from "styled-components";
import Page from "../ui/Page";
import { BiSave } from "react-icons/bi";
import { useState } from "react";
import WordOperations from "../components/Word/WordOperations";
import { Icon } from "../ui/Icon";
import { media } from "../styledComponents/Media";
import { useWord } from "../context/WordContext";
import { useAddWord } from "../components/Word/hooks/useAddWord";
import { useNavigate } from "react-router-dom";
import {Loader} from "../ui/Loader";


const Container = styled.div`padding:40px;`;

const Input = styled.textarea`
  margin: 10px;
  padding: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  min-height: 70px;
  border-radius: 12px;
  ${media.mobile` width:280px;`}
  ${media.tablet` width:310px;`}
  ${media.largeTablet` width:330px;`}
  ${media.desktop` width:350px;`}
`;

function AddNewWord() {
  const navigate= useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { mutate , isLoading, error }=useAddWord();
  const {updateWord ,prepareWordForSave }= useWord();
  const wordForSave =prepareWordForSave();

  const handleAddWord =()=>mutate(wordForSave,
  {
    onSuccess:() => {
    navigate("/dashboard");
    updateWord({word:""});
  }});

  if(error) return <p>Something get Wrong {error.message}</p>
  return (
    <Page>
      {isLoading ?<Loader />
      :<Container>
        <div style={{ display: "flex", gap: "70px" }}>
          <h1>Add New Word</h1>
          {inputValue.length > 0 && (
            <Icon as={BiSave} style={{ fontSize: "32px", marginTop: "10px" }}  onClick={()=>handleAddWord()}/>
          )}
        </div>
        <Input
          placeholder="Write the word here..."
          value={inputValue}
          onChange={(e) =>{ setInputValue(e.target.value);  if(inputValue.length === 1) updateWord({ word: ""}); }}
          onBlur={()=>updateWord({ word: inputValue.trim()})}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); 
              updateWord({ word: inputValue.trim()});
            }
          }}
        />
        {inputValue.length > 0 && <WordOperations />}
      </Container>
      }
    </Page>
  );
}

export default AddNewWord;
