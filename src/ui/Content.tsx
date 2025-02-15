import styled from "styled-components";
import { media } from "../styledComponents/Media";

export const Content = styled.div`
  padding-left: 30px;
  padding-right: 40px;
  display: flex;
  justify-content:space-between;
  flex-direction:column;
  color:var(--background-color);
  gap:25px;
  ${media.mobile`
    padding:0;
      `}
  ${media.tablet`
    padding:0;
      `}
`;