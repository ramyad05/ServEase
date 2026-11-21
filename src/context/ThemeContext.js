import { createContext } from "react";

// Value shape: { theme: "light" | "dark", isDark, setTheme(theme), toggleTheme() }
const ThemeContext = createContext(null);

export default ThemeContext;
