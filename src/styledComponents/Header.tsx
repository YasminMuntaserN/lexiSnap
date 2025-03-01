import styled from "styled-components";
import { media } from "./Media";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
  border-bottom: 0.2px solid var(--color-gray);
  padding: 20px;
  margin-bottom: 30px;

  ${media.mobile`
    padding: 15px;
    gap: 5px;
    align-items: stretch;
  `}

  ${media.tablet`
    padding: 15px;
    gap: 10px;
    margin-bottom: 25px;
  `}
`;
