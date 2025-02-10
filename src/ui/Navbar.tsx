import styled from 'styled-components';
import { MdSortByAlpha } from "react-icons/md";
import { MdSort } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import ThemeToggle from './ThemeToggle';
import Image from './Image';
import SearchBar from './SearchBar';
import { media } from '../styledComponents/Media';
import { useTheme } from '../context/ThemeContext';
import { FiAlignJustify } from "react-icons/fi";
import { useUser } from '../context/UserContext';
import { useState } from 'react';
import { useWord } from '../context/WordContext';

const Container =styled.div `
display:flex;
justify-items:center;
align-items:center;
color:var(--background-color);
justify-content:space-between;
font-family: "Noto Serif Todhri", serif;
font-size:21px;
margin-left:20px;
${media.mobile`flex-direction:column; margin-left:0px;`}
${media.tablet`flex-direction:column;`}
`;
const SubContainer =styled.div`
display:flex;
justify-items:center;
align-items:center;
gap:20px;
margin-top:-10px;
${media.mobile`margin-left:15px;`}
${media.tablet`margin-left:15px;`}
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
${media.mobile` font-size:25px;`}
${media.tablet` font-size:27px;`}
`;
const MainContainer =styled.div`
  display:flex;
  gap:20px ;
  margin:5px;
  flex-direction:row;
  ${media.mobile`
    flex-direction:row;
    margin-top:20px;
    gap:7px ;
  `}
  ${media.tablet`
    flex-direction:row;
    margin-top:20px;
    gap:25px ;
  `}
`;

function Navbar(){
  const{isMobileMode , setDisplayMenu}=useTheme();
  const {sortBy ,setSortBy ,sortOrder ,setSortOrder}=useWord();
  const {user ,logout}=useUser();
  return (
    <Container>
      <div style={{display:'flex' , gap:'30px'}}>
      <ThemeToggle />
      <SearchBar placeholder="Search for a Word..."/>
      </div>
        <MainContainer>
        {(isMobileMode) &&(<FiAlignJustify style={{fontSize:'35px'}} onClick={()=>setDisplayMenu(pre=>!pre)} />)
        }  
        <SubContainer>
          <Image src={`${user?.profilePicture}`}size="small"/>
          <p>{user?.name}</p>
        </SubContainer>
        <div>
          <Icon as={MdSortByAlpha} onClick={()=>setSortBy(sortBy === "creationDate" ? "word" :"creationDate")}/>
          <Icon as={MdSort} onClick={()=>setSortOrder(sortOrder==="asc" ?  "desc" :"asc")}/>
          <Icon as={RiLogoutCircleRLine} onClick={()=>logout()} />
        </div>
        </MainContainer>
    </Container>
  )

}
export default Navbar;