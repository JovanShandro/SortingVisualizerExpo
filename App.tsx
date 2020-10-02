import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { ThemeContext, Theme } from "./lib/themeContext";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const lightTheme: Theme = {
  headerBackground: "#285D61",
  headerColor: "white",
  searchBar: "black",
  backgroundColor: "white"
};

const darkTheme: Theme = {
  headerBackground: "#0E292B",
  headerColor: "#e0e0e0",
  searchBar: "#d0d0d0",
  backgroundColor: "#223b3d"
};

export default function App() {
  const [isLightSchemaSet, setIsLightSchemaSet] = useState(false);
  const theme = isLightSchemaSet ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme }}>
      <StatusBar style="light" />
      <Header setIsLightSchemaSet={setIsLightSchemaSet}></Header>
      <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
        <SearchBar />
      </View>
    </ThemeContext.Provider>
  );
}
