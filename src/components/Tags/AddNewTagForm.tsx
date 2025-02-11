import styled from "styled-components";
import { Button } from "../../styledComponents/Button";
import { useAddTag } from "./hooks/useAddTag";
import { useState } from "react";

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

interface AddNewTagFormProps {
  onClose?: () => void;
}
function AddNewTagForm({onClose}:AddNewTagFormProps){
  const [tag , setTag]=useState("");
  const {mutate,isLoading, error}=useAddTag();
  
  const handleAddTag=()=>{
    mutate({name:tag} ,{
      onSuccess:()=>{
        onClose();
      }
    })
  }

  return (
      <Container>
        {error && <p>there is a something wrong {error.message}</p>}
        <div style={{ display: "flex", gap: "70px" }}>
          <h1>Enter a new Tag</h1>
        </div>
        <Input
          placeholder="Enter a new Tag..."
          onChange={(e)=>setTag(e.target.value)}
        />
        <div style={{display:"flex" ,justifyItems:"center" , gap:"40px", marginTop:"20px"}}>
          <Button variant = 'submit' onClick={()=>handleAddTag()}>{isLoading ? "Saving...":"Save"}</Button>
          <Button variant = 'Cancel' onClick={onClose}>Cancel</Button>
        </div>
      </Container>
  )
}

export default AddNewTagForm;