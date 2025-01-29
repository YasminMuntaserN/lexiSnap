import { useTheme } from "../context/ThemeContext"

function Logo() {
  const{isDarkMode}  = useTheme();
  return (
    <img src={`${isDarkMode ? "./DarkLogo.png" :"./LightLogo.png"}`} alt="logo" />
  )
}

export default Logo