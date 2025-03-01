import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { useWord } from "../context/WordContext";
import { media } from "../styledComponents/Media";

const Container = styled.div<{ size?: string }>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  gap: 15px;
  height: ${({ size }) => (size === "big" ? "63vh" : "50vh")};
  width: 100%;
  -webkit-overflow-scrolling: touch; 
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-box-background);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-gray);
    border-radius: 10px;
  }

  ${media.mobile`
    padding: 10px;
    gap: 10px;
    height: ${({ size }) => (size === "big" ? "100vh" : "250px")};
  `}

  ${media.tablet`
    padding: 15px;
    gap: 12px;
    height: ${({ size }) => (size === "big" ? "100vh" : "250px")};
  `}
`;

const PaginationContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  background: var(--color-box-background);
  margin: 10px auto;
  border-radius: 20px;
  padding: 8px;
  width: fit-content;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${media.mobile`
    gap: 8px;
    padding: 6px;
  `}
`;

const PageNum = styled.div<{ active: boolean }>`
  padding: 8px 12px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "var(--main-color)" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "inherit")};
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    background-color: var(--main-color);
    color: white;
    transform: scale(1.05);
  }

  ${media.mobile`
    padding: 6px 10px;
    font-size: 12px;
  `}
`;

interface ScrollContainerProps {
  children: ReactNode;
  useFor?: string;
  size?: string;
}

function ScrollContainer({ useFor, children, size }: ScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { TagsPage, WordsPage, setWordsPage, setTagsPage, WordsTotalPages, TagsTotalPages } = useWord();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const scrollThreshold = 50; 
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - scrollThreshold;

      if (isNearBottom) {
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
  }, [TagsTotalPages, setWordsPage, setTagsPage, useFor, WordsTotalPages]);

  return (
    <>
      <Container size={size} ref={containerRef}>
        {children}
      </Container>
      <PaginationContainer>
        {(useFor === "words" ? Array.from({ length: WordsTotalPages }) : Array.from({ length: TagsTotalPages }))
          .map((_, index) => (
            <PageNum
              key={index}
              active={index + 1 === (useFor === "words" ? WordsPage : TagsPage)}
              onClick={() => {
                if(useFor === "words")  setWordsPage(index + 1); else setTagsPage(index + 1);
              }}
            >
              {index + 1}
            </PageNum>
          ))}
      </PaginationContainer>
    </>
  );
}

export default ScrollContainer;
