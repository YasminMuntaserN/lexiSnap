import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMode: boolean;
  setIsMobileMode: React.Dispatch<React.SetStateAction<boolean>>;
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
      //Through this line, it will be determined whether the user has activated dark mode or not, and accordingly the default value will be
    const storedTheme = localStorage.getItem("isDarkMode");
    if (storedTheme !== null) return storedTheme === "true"; 
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isMobileMode, setIsMobileMode] = useState<boolean>(window.innerWidth <= 768);
  const [displayMenu, setDisplayMenu] = useState<boolean>(true);

  // Listen for theme changes and save to localStorage
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode.toString());
  }, [isDarkMode]);

  // Detect system dark mode changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Detect window resize for mobile mode
  useEffect(() => {
    const checkMobileMode = () => setIsMobileMode(window.innerWidth <= 768);

    window.addEventListener("resize", checkMobileMode);
    return () => window.removeEventListener("resize", checkMobileMode);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, isMobileMode, setIsMobileMode, displayMenu, setDisplayMenu }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
