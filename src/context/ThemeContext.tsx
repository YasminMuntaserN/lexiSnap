import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMode: boolean;
  setIsMobileMode: React.Dispatch<React.SetStateAction<boolean>>;
  DisplayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobileMode, setIsMobileMode] = useState<boolean>(false);
  const [DisplayMenu, setDisplayMenu] = useState<boolean>(true);


  useEffect(() => {
    const checkMobileMode = () => {
      if (window.innerWidth <= 768) {
        setIsMobileMode(true); 
      } else {
        setIsMobileMode(false); 
      }
    };

    checkMobileMode();

    window.addEventListener("resize", checkMobileMode);

    return () => {
      window.removeEventListener("resize", checkMobileMode);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode ,isMobileMode, setIsMobileMode ,DisplayMenu, setDisplayMenu}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
