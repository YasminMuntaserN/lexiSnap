import styled from "styled-components";
import { Button } from "../../styledComponents/Button";
import Tag from "./Tag";

const Container=styled.div`
`;
const Input=styled.textarea`
  width:350px;
  margin:10px;
  padding:10px;
  font-size:18px;
  border:none;
  outline:none;
  min-height:70px;
  border-radius:12px;
`;
function AddNewTag(){

  return (
      <Container>
        <div style={{ display: "flex", gap: "70px" }}>
          <h1>Enter a new Tag</h1>
        </div>
        <Input
          placeholder="Enter a new Tag..."
          // value={inputValue}
          // onChange={(e) => setInputValue(e.target.value)}
        />
        <div style={{display:"flex" , gap:"20px" , marginTop:"10px"}}>
          <Button variant = 'submit'>Save</Button>
          <Button variant = 'Cancel'>Cancel</Button>
        </div>
      </Container>
  )
}

export default AddNewTag;