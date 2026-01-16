import { lightTheme } from "./light";
import { darkTheme } from "./dark";
import { fonts } from "./fonts";

export type ThemeType = "light" | "dark";

export const themes = {
  light: {
    ...lightTheme,
    fonts,
  },
  dark: {
    ...darkTheme,
    fonts,
  },
};

export type AppTheme = typeof themes.light;
