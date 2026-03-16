
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AuthPage from "./pages/AuthPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
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
          element={<AuthPage onAuthSuccess={() => setIsAuthenticated(true)} />}
        />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/auth"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
