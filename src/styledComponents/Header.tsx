import styled from "styled-components";
import { media } from "../styledComponents/Media";

export const Header = styled.div`
display:flex;
gap: 70px ;
border-bottom: 0.2px solid var(--color-gray) ;
padding:10px;
margin-bottom:30px;
justify-content:space-between;
${media.mobile`
  margin-top:20px;
  gap: 10px ;
    `}
${media.tablet`
  margin-top:20px;
  gap: 20px ;
    `}
`;