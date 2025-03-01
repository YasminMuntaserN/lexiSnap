import styled from "styled-components";
import { useWord } from "../context/WordContext";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { media } from "./Media";

const StyledInput = styled.input`
  margin: 10px;
  padding: 12px 15px;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:focus {
    box-shadow: 0 0 0 2px var(--main-color);
  }

  &::placeholder {
    color: var(--color-gray);
  }

  ${media.mobile`
    margin: 5px;
    padding: 10px 12px;
    font-size: 16px;
  `}

  ${media.tablet`
    margin: 8px;
    padding: 10px 14px;
    font-size: 16px;
  `}
`;

interface InputProps {
  placeholder?: string;
  action?: (e: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?:string;
}

export function Input({ placeholder, action, onChange ,value }: InputProps) {
  const { WordInfoCleared } = useWord();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue("");
  }, [WordInfoCleared]);

  const handleAction = (e: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => {
    if (action) {
      action(e);
    }
  };

  return (
    <StyledInput
      placeholder={placeholder}
      value={value ?? inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        if (onChange) onChange(e);
      }}
      onBlur={handleAction}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleAction(e);
        }
      }}
    />
  );
}
