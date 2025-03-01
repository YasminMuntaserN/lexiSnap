import styled from "styled-components";
import { Button } from "../styledComponents/Button";
import { useState } from "react";
import { useAddTag } from "../components/Tags/hooks/useAddTag";
import { useWord } from "../context/WordContext";
import { media } from "../styledComponents/Media";

const Container = styled.div`
  padding: 30px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

  ${media.mobile`
    padding: 15px;
  `}

  ${media.tablet`
    padding: 20px;
  `}
`;

const Input = styled.textarea`
  width: 100%;
  margin: 15px 0;
  padding: 15px;
  font-size: 16px;
  border: 2px solid var(--color-gray);
  border-radius: 12px;
  background: var(--color-box-background);
  color: var(--text-color);
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--main-color);
    box-shadow: 0 0 0 2px rgba(var(--main-color-rgb), 0.1);
  }

  ${media.mobile`
    padding: 12px;
    font-size: 14px;
    min-height: 80px;
  `}
`;

const Title = styled.h2`
  font-size: 24px;
  color: var(--text-color);
  margin-bottom: 20px;

  ${media.mobile`
    font-size: 20px;
    margin-bottom: 15px;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 20px;

  ${media.mobile`
    gap: 10px;
    flex-direction: column;
  `}
`;

const ErrorMessage = styled.p`
  color: var(--color-error);
  font-size: 14px;
  margin-top: 10px;
`;

interface AddFormProps {
  onCloseParentModal?: () => void;
  name?: string;
  onClose?: () => void;
}

function AddForm({ onCloseParentModal, name, onClose }: AddFormProps) {
  const [inputValue, setInputValue] = useState("");
  const { mutate, isLoading, error } = useAddTag();
  const { updateWord, word } = useWord();

  const handleAction = () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;

    switch (name) {
      case "tags":
        mutate(
          { name: trimmedValue },
          {
            onSuccess: (data) => {
              onClose?.();
              updateWord({ tags: [...word.tags, { name: trimmedValue, id: data._id }] });
            },
          }
        );
        break;
      case "synonyms":
        updateWord({ synonyms: [...word.synonyms, trimmedValue] });
        onClose?.();
        break;
      case "opposites":
        updateWord({ opposites: [...word.opposites, trimmedValue] });
        onClose?.();
        break;
    }
  };

  const handleClose = () => {
    onClose?.();
    if (name !== "tags") onCloseParentModal?.();
  };

  return (
    <Container>
      <Title>Add New {name}</Title>
      {error && <ErrorMessage>Error: {error.message}</ErrorMessage>}
      <Input
        placeholder={`Enter a new ${name}...`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ButtonGroup>
        <Button variant="Cancel" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="submit"
          onClick={handleAction}
          disabled={!inputValue.trim() || isLoading}
        >
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default AddForm;
