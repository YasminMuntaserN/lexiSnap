import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Container = styled.div`
  position: relative; 
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top: 30px;
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
  height: 100vh;
`;

function Background({ children }) {

  const {isDarkMode}=useTheme();
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
