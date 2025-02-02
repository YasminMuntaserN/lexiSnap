import styled from "styled-components";
import { Button } from "../styledComponents/Button";
import { useEffect } from "react";
import { media } from "../styledComponents/Media";

const Navigation = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center; 
  text-align: center;
  padding: 10px;
  gap: 30px;
  ${media.mobile`
    align-items:start; 
    text-align:left; 
    justify-content:start; 
    padding: 0;
    gap: 15px;
  `}
`;

const PageIndicator = styled.span`
  font-size: 16px;
  color: var(--background-color);
  ${media.mobile`margin-top:30px`}
`;

interface PaginationProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  setShowSteps: (show: boolean) => void;
}

function Pagination({ setCurrentPage, currentPage, setShowSteps }: PaginationProps) {
  const totalPages = 6;

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages+1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    if (currentPage > totalPages || currentPage === 0){ 
      setShowSteps(pre=>!pre);
      setCurrentPage(1);
    }
  }, [setCurrentPage,currentPage, setShowSteps, totalPages]);

  return (
    <Navigation>
        <Button variant="Step" onClick={prevPage}>
          Previous
        </Button>
      <PageIndicator>
        {currentPage} / {totalPages}
      </PageIndicator>
        <Button variant="Step" onClick={nextPage}>
          Next
        </Button>
    </Navigation>
  );
}

export default Pagination;
