import styled from "styled-components";
import { MdSunny } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useEffect } from "react";
import {useTheme} from "../context/ThemeContext"

const Container =styled.div`
  width:100px;
  height:40px;
  background-color:var(--color-border);
  display:flex;
  justify-content:space-between;
  gap:10px;
  border-radius: 70px;
  padding:5px;
`;

const Icon=styled.div`
  font-size:30px;
`
const Circle = styled(FaCircle)`
  color: ${(props) => (props.theme.isDarkMode ? "var(--color-orang)" : "var(--second-color)")};
  font-size: 32px;
`;

function ThemeToggle() {
  const {isDarkMode , setIsDarkMode}=useTheme();
  const handleMode =()=>setIsDarkMode(!isDarkMode);


  useEffect(function(){
    if(!isDarkMode){
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    }else{
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  } ,[isDarkMode])
  return (
    <Container>
      <Icon onClick={handleMode}>{isDarkMode ?<FaMoon style={{color:'var(--color-gray)' }}/> :<Circle theme={{ isDarkMode }} /> }</Icon>
      <Icon onClick={handleMode}>{!isDarkMode ?<MdSunny style={{color:'var(--color-orang)'}}/>:<Circle theme={{ isDarkMode }} />}</Icon>
    </Container>
  )
}

export default ThemeToggle
