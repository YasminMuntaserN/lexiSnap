import styled from "styled-components";
import { media } from "./Media";
import { useWord } from "../context/WordContext";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

const StyledInput = styled.input`
  width: 350px;
  margin: 10px;
  padding: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 12px;
  margin-top: -10px;

  ${media.mobile`width: 200px; margin: 5px; padding: 5px;`}
  ${media.tablet`width: 300px; margin: 5px; padding: 5px;`}
  ${media.desktop`width: 350px; margin: 10px; padding: 10px;`}
`;

  interface InputProps {
    placeholder?: string;
    action?: (e: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ placeholder, action ,onChange }: InputProps) {
  const { WordInfoCleared } = useWord();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(""); 
  }, [WordInfoCleared]);

  return (
    <StyledInput
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        if (onChange) onChange(e);
      }}
      onBlur={(e)=>action(e)}
      onKeyDown={(e)=>
        { if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        action(e);
      }
      }}
    />
  );
}
