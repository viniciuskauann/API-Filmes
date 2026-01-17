import { lightTheme } from "../theme/light";
import { darkTheme } from "../theme/dark";
import { fonts } from "../theme/fonts";

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
