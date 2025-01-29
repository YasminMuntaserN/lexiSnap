import styled from "styled-components";
import { Button } from "../styledComponents/Button";
import { useEffect } from "react";

const Navigation = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  gap: 30px;
`;

const PageIndicator = styled.span`
  font-size: 16px;
  color: var(--background-color);
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
