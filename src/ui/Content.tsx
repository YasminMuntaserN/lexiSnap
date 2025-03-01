import styled from "styled-components";
import { media } from "../styledComponents/Media";

export const Content = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: var(--background-color);
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;

  ${media.mobile`
    padding: 10px 15px;
    gap: 15px;
  `}

  ${media.tablet`
    padding: 15px 20px;
    gap: 20px;
  `}

  ${media.largeTablet`
    padding: 20px 25px;
  `}
`;
