import LoginWrapper from "./pages/Login";
import Dashboard from "./pages/Dashboard.tsx";
import { ThemeProvider } from './context/ThemeContext.tsx';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Extension from "./pages/Extension.tsx";
import Contact from "./pages/Contact.tsx";

function App() {

  return (
    <ThemeProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginWrapper />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/extension" element={<Extension />} />
          <Route path="/contact" element={<Contact />} />
          {/*<Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
