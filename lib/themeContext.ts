import React from "react";

export interface Theme {
  headerBackground: string;
  headerColor: string;
  searchBar: string;
  backgroundColor: string;
}

export const ThemeContext = React.createContext<{ theme: Theme | null }>({
  theme: null
});

export const useThemeContext = () => React.useContext(ThemeContext);
