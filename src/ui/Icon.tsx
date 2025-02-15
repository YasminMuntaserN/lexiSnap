import styled from "styled-components";
import { media } from "../styledComponents/Media";

export const Icon=styled.div`
  color:var(--background-color-two);
  margin-left:20px;
  font-size:28px;
  cursor: pointer;
  &:hover, 
  &:focus {
  color: var(--main-color); 
}
${media.mobile`
  font-size:20px;
  `}
  ${media.tablet`
    font-size:22px;
  `}
`;