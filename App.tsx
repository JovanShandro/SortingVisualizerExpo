import React, { useState } from "react";
import Header from "./components/Header";
import { ThemeContext, Theme } from "./lib/themeContext";

const lightTheme: Theme = {
  headerBackground: "#285D61",
  headerColor: "white",
  searchBar: "black"
};

const darkTheme: Theme = {
  headerBackground: "#0E292B",
  headerColor: "#e0e0e0",
  searchBar: "#d0d0d0"
};

export default function App() {
  const [isLightSchemaSet, setIsLightSchemaSet] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ theme: isLightSchemaSet ? lightTheme : darkTheme }}
    >
      <Header setIsLightSchemaSet={setIsLightSchemaSet}></Header>
    </ThemeContext.Provider>
  );
}
