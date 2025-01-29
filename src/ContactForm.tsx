import styled from "styled-components";
import { Button } from "./styledComponents/Button";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column;
  gap: 10px;
  width: 100%;
  margin-top:-40px;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 500px;
  height: 150px;
  padding: 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  resize: none; 
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--color-border);
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

function ContactForm() {
  return (
    <FormContainer>
      <TextArea placeholder="Write what you want..." />
      <Button variant="submit">Save</Button>
    </FormContainer>
  );
}

export default ContactForm;