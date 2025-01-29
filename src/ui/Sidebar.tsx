import styled from "styled-components";
import { FaHashtag } from "react-icons/fa6";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { FaHandHoldingHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  border: 2px solid var(--color-gray); 
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); 
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  color: var(--main-color);
  margin: auto;
  gap: 5px;
  cursor: pointer;
  padding: 10px;

  &:hover,
  &:focus {
    color: var(--second-color); 
    transform: scale(1.1); 
    transition: all 0.2s ease; 
  }
`;

const Icon = styled.div`
  font-size: 32px;
`;

function Sidebar() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Container>
      <Box onClick={() => handleNavigation('/Tags')}>
        <Icon as={FaHashtag} />
        Tags
      </Box>
      <Box onClick={() => handleNavigation('/extension')}>
        <Icon as={IoExtensionPuzzle} />
        Our Extension
      </Box>
      <Box onClick={() => handleNavigation('/MobileApp')}>
        <Icon as={FaMobileAlt} />
        Mobile App
      </Box>
      <Box onClick={() => handleNavigation('/Important')}>
        <Icon as={FaHandHoldingHeart} />
        Important
      </Box>
      <Box onClick={() => handleNavigation('/contact')}>
        <Icon as={GrContact} />
        Contact Us
      </Box>
    </Container>
  );
}

export default Sidebar;