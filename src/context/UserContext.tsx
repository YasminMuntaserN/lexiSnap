import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  googleId: string;
  profilePicture: string;
  hasExtension: boolean;
}

interface UserContextType {
  user: User | null;
  accessToken: string | null;
  loginUser: (userData: User, token: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem("accessToken") || null;
  });

  const loginUser = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ user, accessToken, loginUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
}
