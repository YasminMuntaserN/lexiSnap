import styled from 'styled-components';
import { media } from './Media';

export const Panel = styled.div`
  background-color: var(--color-white);
  height: 93vh;
  border-radius: 30px;
  padding: 10px; 
  overflow: hidden;
  width: 95%; 
  margin: auto; 
  ${media.mobile`
    width: 97%; 
  padding-bottom: 70px;
    `}

  ${media.tablet`
    width: 98%; 
    padding-bottom: 70px;
  `}
`;

