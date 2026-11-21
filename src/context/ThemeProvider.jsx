import { useCallback, useEffect, useMemo, useState } from "react";
import ThemeContext from "./ThemeContext";
import {
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  saveTheme,
  withThemeTransition,
} from "../utils/theme";

const initialTheme = () => getStoredTheme() ?? getSystemTheme();

// Apply the saved/system theme as soon as this module loads, i.e. before the first render,
// to avoid a flash of the wrong theme.
if (typeof document !== "undefined") applyTheme(initialTheme());

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(initialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Until the user makes an explicit choice, follow changes in the operating-system theme.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!getStoredTheme()) setThemeState(e.matches ? "dark" : "light");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const setTheme = useCallback((next) => {
    withThemeTransition();
    saveTheme(next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [theme, setTheme]
  );

  const value = useMemo(
    () => ({ theme, isDark: theme === "dark", setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
