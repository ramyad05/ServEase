import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useInRouterContext,
  useLocation,
} from "react-router-dom";
import "./dark-theme.css";
import ThemeProvider from "./context/ThemeProvider";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Scroll to the top when changing page (hash links such as /#services handle their own scrolling).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  // Works whether <BrowserRouter> is already provided in main.jsx or not.
  const insideRouter = useInRouterContext();
  return (
    <ThemeProvider>
      {insideRouter ? (
        <AppRoutes />
      ) : (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}
