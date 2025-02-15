import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { media } from "../styledComponents/Media";
import { useSearch } from "../components/Word/hooks/useSearch";
import { useWord } from "../context/WordContext";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const Input = styled.input`
  border-radius: 1.5rem; 
  padding:0.7rem; 
  width: 400px; 
  transition: all 0.3s; 
  border: none;
  outline: 1px solid var(--color-gray);
    ${media.mobile`
      width: 200px; 
    `}
    ${media.tablet`
      width: 300px; 
    `}
`;
interface SearchBarProps {
  placeholder: string;
  style?: object;
  type?: string;
}

function SearchBar({ placeholder, style, type }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const { mutate, isLoading, error } = useSearch();
  const debouncedValue=  useDebounce(inputValue , 500);
  const { WordsPage, TagsPage, setSearchInfo, searchInfo } = useWord();

  const handleSearch = () => {
    setSearchInfo({ 
      list: [], 
      isLoading: false, 
      error: null, 
      isEmpty: true, 
      isSearch: false, 
      tagId: searchInfo?.tagId || "" 
    });

    if (debouncedValue.length < 2) return; 

    mutate(
      {
        query: debouncedValue,
        page: type === "tags" ? TagsPage : WordsPage,
        tag: searchInfo?.tagId,
      },
      {
        onSuccess: (data) => {
          setSearchInfo({
            list: data || [],
            isLoading,
            error: error ? error.message : "",
            isEmpty: !data || data.length === 0,
            isSearch: true,
            tagId: searchInfo?.tagId || "",
          });
        },
      }
    );
  };

  useEffect(() => {
    if (debouncedValue.length === 0) {
      setSearchInfo((prev) => ({
        ...prev,
        list: [],
        isLoading: false,
        error: null,
        isEmpty: true,
        isSearch: false,
        tagId: prev.tagId,
      }));
    } else {
      setSearchInfo((prev) => ({
        ...prev,
        isSearch: true,
      }));
    }

    handleSearch(); 
  }, [debouncedValue]); 

  return (
    <div style={{ position: "relative" }}>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        style={style}
      />
      <FaSearch
        style={{
          position: "absolute",
          right: `${style ? "50px" : "20px"}`,
          top: "5px",
          fontSize: "27px",
        }}
      />
    </div>
  );
}

export default SearchBar;