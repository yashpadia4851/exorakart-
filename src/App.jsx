
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const handleAuthSuccess = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <HomePage />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route
          path="/auth"
          element={<AuthPage onAuthSuccess={handleAuthSuccess} />}
        />
        <Route
          path="/services"
          element={
            isAuthenticated ? (
              <ServicesPage />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route
          path="/about"
          element={
            isAuthenticated ? (
              <AboutPage />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route
          path="/contact"
          element={
            isAuthenticated ? (
              <ContactPage />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/auth"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
