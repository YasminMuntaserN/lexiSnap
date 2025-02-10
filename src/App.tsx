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
function App() {
  const queryClient = new QueryClient();
  return (
<QueryClientProvider client={queryClient}>
  <ThemeProvider >
      <WordProvider>
      <BrowserRouter>
        <UserProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/words/:wordId" element={<WordDetails />} /> 
          <Route path="/extension" element={<Extension />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/important" element={<Important />} />
          <Route path="/addNewWord" element={<AddNewWord/>} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/tags/:tagId" element={<TagDetails />} /> 
          {/*<Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </UserProvider>
      </BrowserRouter>
      </WordProvider>
  </ThemeProvider>
  </QueryClientProvider>
  )
}

export default App;
