import styled from "styled-components";
import { media } from "./Media";

export const Operation=styled.div`
  display: grid;
  justify-content: space-between;
  width:100%;
  grid-template-columns: 1fr 0.1fr 1fr;
    ${media.mobile`  grid-template-columns: 1fr 2fr ; gap:20px; `}
`;
