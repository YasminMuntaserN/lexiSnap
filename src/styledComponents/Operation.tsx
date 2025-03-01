import styled from "styled-components";
import { media } from "./Media";

export const Operation = styled.div`
  display: grid;
  width: 100%;
  gap: 20px;
  grid-template-columns: 1fr 0.1fr 1fr;
  align-items: start;

  ${media.mobile`
    grid-template-columns: 1fr;
    gap: 15px;
  `}

  ${media.tablet`
    grid-template-columns: 1fr 0.1fr 1fr;
    gap: 15px;
  `}
`;
