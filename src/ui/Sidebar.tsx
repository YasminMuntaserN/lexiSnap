import styled from "styled-components";
import { FaHashtag } from "react-icons/fa6";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { FaHandHoldingHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { media } from "../styledComponents/Media";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  border: 2px solid var(--color-gray); 
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); 
  ${media.largeTablet`
    height:80vh ;
  `}

  ${media.mobile`
    border: none; 
    box-shadow: none; 
    box-shadow: 0 4px 6px rgba(219, 202, 202, 0.5); 
    border-radius: 5px;
  `}

  ${media.tablet`
    border: none; 
    box-shadow: none;
    box-shadow: 0 4px 6px rgba(219, 202, 202, 0.5); 
    border-radius: 5px;
    `}

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
  ${media.mobile`
    display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr ;
  font-size: 14px;
  `}

  ${media.tablet`
    display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr ;
  font-size: 16px;
    `}

`;

const Icon = styled.div`
  font-size: 32px;
  ${media.mobile`font-size: 21px;`}
  ${media.tablet`font-size: 21px;`}
`;

function Sidebar() {
  const{isMobileMode ,displayMenu, setDisplayMenu}=useTheme();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setDisplayMenu(true);
  };

  return (
    <>
    {!(isMobileMode && displayMenu) &&
    (<Container>
      <Box onClick={() => handleNavigation('/tags')}>
        <Icon as={FaHashtag} />
            Tags
      </Box>
      <Box onClick={() => handleNavigation('/extension')}>
        <Icon as={IoExtensionPuzzle} />
        Our Extension
      </Box>
      <Box onClick={() => handleNavigation('/mobileApp')}>
        <Icon as={FaMobileAlt} />
        Mobile App
      </Box>
      <Box onClick={() => handleNavigation('/important')}>
        <Icon as={FaHandHoldingHeart} />
        Important
      </Box>
      <Box onClick={() => handleNavigation('/contact')}>
        <Icon as={GrContact} />
        Contact Us
      </Box>
    
    </Container>
    )}
    </>
  );
}

export default Sidebar;