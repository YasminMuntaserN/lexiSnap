import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard.tsx";
import { ThemeProvider } from './context/ThemeContext.tsx';
import Extension from "./pages/Extension.tsx";
import Contact from "./pages/Contact.tsx";
import Important from "./pages/Important.tsx";
import AddNewWord from "./pages/AddNewWord.tsx";
import Tags from "./pages/Tags.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { WordProvider } from "./context/WordContext.tsx";
import TagDetails from "./pages/TagDetails.tsx";
import WordDetails from "./pages/WordDetails.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import MobileApp from "./pages/MobileApp.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import { useEffect, useState } from "react";

function App() {
  const queryClient = new QueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsAuthenticated(!!accessToken);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <WordProvider>
            <UserProvider>
              <ReactQueryDevtools initialIsOpen={false} />
              <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/aboutUs" element={<AboutUs />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/words/:wordId" element={<WordDetails />} /> 
                  <Route path="/extension" element={<Extension />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/important" element={<Important />} />
                  <Route path="/addNewWord" element={<AddNewWord />} />
                  <Route path="/mobileApp" element={<MobileApp />} />
                  <Route path="/tags" element={<Tags />} />
                  <Route path="/tags/:tagId" element={<TagDetails />} /> 
                </Route>

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </UserProvider>
          </WordProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
