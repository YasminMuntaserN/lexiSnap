import { ReactNode } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { media } from './Media';

const Container = styled.div`
  position: relative; 
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top: 30px;
  min-height: 100vh;

  ${media.mobile`
    padding-top: 15px;
  `}

  ${media.tablet`
    padding-top: 20px;
  `}
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: black;
  opacity: 0.6;
  z-index: 0; 
`;

const SubContainer = styled.div`
  position: relative; 
  z-index: 10;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 60px;

  ${media.mobile`
    padding-bottom: 80px;
  `}

  ${media.tablet`
    padding-bottom: 70px;
  `}
`;

interface BackgroundProps {
  children: ReactNode;
}

function Background({ children }: BackgroundProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <Container style={{ backgroundImage: "url('./background.webp')" }}>
      {!isDarkMode && <Overlay />}
      <SubContainer>
        {children}
      </SubContainer>
    </Container>
  );
}

export default Background;

