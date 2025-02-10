import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { useWord } from "../context/WordContext";

const Container = styled.div<{size:string}>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  margin: 10px;
  gap: 15px;
  height: ${({ size }) => (size ? "450px" : "350px")};
  width:${({ size }) => (size ? "950px" : "")};
`;

const PaginationContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  background: var(--color-box-background);
  margin: auto;
  border-radius: 20px;
  width:fit-content;
`;

const PageNum = styled.div<{ active: boolean }>`
  padding: 10px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "var(--main-color)" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "inherit")};
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    background-color: var(--main-color);
    color: white;
    transform: scale(1.1);
  }
`;

interface ScrollContainerProps {
  children: ReactNode;
  useFor?: string;
  size?:string;
}

function ScrollContainer({ useFor, children ,size}: ScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {TagsPage, WordsPage, setWordsPage, setTagsPage, WordsTotalPages ,TagsTotalPages} = useWord();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if (isAtBottom) {
        if (useFor === "words") {
          setWordsPage((prev) => (prev < WordsTotalPages ? prev + 1 : prev));
        } else {
          setTagsPage((prev) => (prev < TagsTotalPages ? prev + 1 : prev)); 
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [TagsTotalPages,setWordsPage, setTagsPage, useFor, WordsTotalPages]);

  return (
    <>
      <Container size={size} ref={containerRef}>{children}</Container>
      <PaginationContainer>
        {useFor === "words" ?Array.from({ length: WordsTotalPages }, (_, index) => (
          <PageNum
            key={index}
            active={index + 1 === WordsPage}
            onClick={() => {
              setWordsPage(index + 1);
            }}
          >
            {index + 1}
          </PageNum>
        ))
        :
        Array.from({ length: TagsTotalPages }, (_, index) => (
          <PageNum
            key={index}
            active={index + 1 === TagsPage}
            onClick={() => {
              setTagsPage(index + 1); 
            }}
          >
            {index + 1}
          </PageNum>
        ))
      }
      </PaginationContainer>
    </>
  );
}

export default ScrollContainer;

