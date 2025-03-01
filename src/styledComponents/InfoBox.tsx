import styled from "styled-components";
import { media } from "./Media";

export const InfoBox = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: row;
  margin: -5px; 
  
  ${media.mobile`
    gap: 8px;
  `}
`;

export const Info = styled.p`
  background: var(--linear-gradient);
  padding: 10px 15px;
  border-radius: 15px;
  min-height: 50px;
  font-size: 20px;
  color: white;
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 5px;
  transition: all 0.2s ease;
  
  ${media.mobile`
    font-size: 16px;
    min-height: 40px;
    padding: 8px 12px;
  `}

  ${media.tablet`
    font-size: 18px;
    min-height: 45px;
  `}
`;
