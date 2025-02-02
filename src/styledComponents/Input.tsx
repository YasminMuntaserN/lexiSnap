import styled from "styled-components";
import { media } from "./Media";

export const Input=styled.input`
  width:350px;
  margin:10px;
  padding:10px;
  font-size:18px;
  border:none;
  outline:none;
  border-radius:12px;
  
  margin-top:-10px;
      ${media.mobile`   width:200px;margin:5px;padding:5px;`}
      ${media.tablet`   width:300px;margin:5px;padding:5px;`}
      ${media.desktop`  width:350px; margin:10px;padding:10px;`}
`;