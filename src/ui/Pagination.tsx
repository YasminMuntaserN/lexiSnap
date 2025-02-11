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
    setCurrentPage(Math.min(currentPage + 1, totalPages)); 
  };

  const prevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1)); 
  };

  useEffect(() => {
    if (currentPage > totalPages || currentPage === 0){ 
      setShowSteps(true);
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
