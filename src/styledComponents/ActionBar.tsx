import styled from "styled-components";
import { media } from "./Media";

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  
  ${media.mobile`
    padding: 12px;
  `}
`;
