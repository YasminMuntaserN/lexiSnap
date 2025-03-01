import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { media } from "../styledComponents/Media";
import { useSearch } from "../components/Word/hooks/useSearch";
import { useWord } from "../context/WordContext";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  ${media.mobile`
    max-width: 100%;
  `}
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 40px 12px 16px;
  border-radius: 20px;
  font-size: 16px;
  border: 2px solid var(--color-gray);
  background: var(--color-box-background);
  color: var(--text-color);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--main-color);
    box-shadow: 0 0 0 2px rgba(var(--main-color-rgb), 0.1);
  }

  &::placeholder {
    color: var(--color-gray);
  }

  ${media.mobile`
    padding: 10px 35px 10px 14px;
    font-size: 14px;
  `}
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-gray);
  font-size: 18px;
  pointer-events: none;

  ${media.mobile`
    right: 14px;
    font-size: 16px;
  `}
`;

interface SearchBarProps {
  placeholder: string;
  style?: React.CSSProperties;
  type?: string;
}

function SearchBar({ placeholder, style, type }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const { mutate, isLoading, error } = useSearch();
  const debouncedValue = useDebounce(inputValue, 500);
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
      }));
    } else {
      handleSearch();
    }
  }, [debouncedValue]);

  return (
    <SearchContainer style={style}>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <SearchIcon />
    </SearchContainer>
  );
}

export default SearchBar;
