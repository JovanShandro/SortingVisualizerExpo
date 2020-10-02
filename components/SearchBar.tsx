import React, { useState } from "react";
import { View, StyleSheet, ViewStyle, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useThemeContext } from "../lib/themeContext";
import { allAlgorithms } from "../constants";

interface Props {
  setAlgorithms(algs: string[]): void;
}

const SearchBar: React.FC<Props> = ({ setAlgorithms }) => {
  const { theme } = useThemeContext();

  const [searchedString, setSearchedString] = useState("");

  const handleChangeText = (text: string) => {
    setSearchedString(text);
    setAlgorithms(allAlgorithms.filter(alg => alg.includes(searchedString)));
  };

  return (
    <View style={styles.container}>
      <FontAwesome
        style={{ color: theme?.searchBar }}
        size={30}
        name="search"
      />
      <TextInput
        style={[styles.input, { borderColor: theme?.searchBar }]}
        value={searchedString}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

interface Style {
  container: ViewStyle;
  input: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: 15,
    flexDirection: "row",
    paddingHorizontal: "5%",
    justifyContent: "space-evenly"
  },
  input: {
    borderRadius: 20,
    borderWidth: 1,
    width: "80%"
  }
});

export default SearchBar;
