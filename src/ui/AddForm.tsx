import styled from "styled-components";
import { Button } from "../styledComponents/Button";
import { useState } from "react";
import { useAddTag } from "../components/Tags/hooks/useAddTag";
import { useWord } from "../context/WordContext";

const Container=styled.div`
padding:30px;
`;

const Input=styled.textarea`
  width:400px;
  margin:10px;
  padding:10px;
  font-size:18px;
  border:none;
  outline:none;
  min-height:70px;
  border-radius:12px;
`;
function AddForm({ onCloseParentModal ,name ,onClose}){
  const [inputValue , setInputValue]=useState("");
    const {mutate,isLoading, error}=useAddTag();
    const {updateWord  ,word }=useWord();
    
    function handleAction() {
      switch(name) {
        case "tags":
          mutate({ name: inputValue }, {
            onSuccess: (data) => {
              onClose();
              updateWord({ tags: [...word.tags,{name :inputValue , id:data._id} ] });
            }
          });
          break;
        case "synonyms":
            updateWord({ synonyms: [...word.synonyms, inputValue] });
          onClose();
          break;
        case "opposites":
            updateWord({ opposites: [...word.opposites, inputValue] });
          onClose();
          break;
      }
    }
    

  function handleClose(){
    onClose();
    if(name !== "tags") onCloseParentModal();
  }
  return (
<Container>
        {error && <p>there is a something wrong {error.message}</p>}
        <div style={{ display: "flex", gap: "70px" }}>
          <h1>Enter a new {name}</h1>
        </div>
        <Input
          placeholder={`Enter a new ${name}...`}
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <div style={{display:"flex" ,justifyItems:"center" , gap:"40px", marginTop:"20px"}}>
          <Button variant = 'submit' onClick={()=>handleAction()}>{isLoading ? "Saving...":"Save"}</Button>
          <Button variant = 'Cancel' onClick={()=>handleClose()}>Cancel</Button>
        </div>
  </Container>
  )
}

export default AddForm;