import { createContext, ReactNode, useContext, useState } from "react";
import { AppTheme, themes, ThemeType } from "../theme/theme";


interface ThemeContextData {
  theme: AppTheme;
  mode: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeType>("light");

  function toggleTheme() {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[mode],
        mode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeContext };
