import styled from 'styled-components';
import { MdSortByAlpha } from "react-icons/md";
import { MdSort } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import ThemeToggle from './ThemeToggle';
import Image from './Image';
import SearchBar from './SearchBar';

const Container =styled.div `
display:flex;
justify-items:center;
align-items:center;
color:var(--background-color);
justify-content:space-between;
font-family: "Noto Serif Todhri", serif;
font-size:21px;
margin-left:20px;
margin-left:20px;
`;
const SubContainer =styled.div`
display:flex;
justify-items:center;
align-items:center;
gap:20px;
margin-top:-10px;
`;
const Icon =styled.div`
  font-size:32px;
  cursor: pointer;

&:hover,
&:focus {
  color: var(--main-color); 
  transform: scale(1.1); 
  transition: all 0.2s ease; 
  padding:5px;
}
`;
function Navbar(){
  return (
    <Container>
      <ThemeToggle />
        <div style={{display:'flex' , gap:'20px' ,margin:"5px"}}>
        <SubContainer>
          <Image src="./g4.jpg"/>
          <p>Yasmin Nassar</p>
        </SubContainer>
        <SearchBar />
          <Icon as={MdSortByAlpha} />
          <Icon as={MdSort} />
          <Icon as={RiLogoutCircleRLine} />
        </div>
    </Container>
  )

}
export default Navbar;