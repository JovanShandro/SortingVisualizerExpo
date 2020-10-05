import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { allAlgorithms } from "../constants";
import { useThemeContext } from "../lib/themeContext";

interface Props {
  setAlgorithms(algs: string[]): void;
}

const SearchBar: React.FC<Props> = ({ setAlgorithms }) => {
  const { theme } = useThemeContext();

  const [searchedString, setSearchedString] = useState("");

  const handleChangeText = (text: string) => {
    setSearchedString(text);
    setAlgorithms(
      text === ""
        ? allAlgorithms
        : allAlgorithms.filter(alg => alg.includes(text))
    );
  };

  return (
    <View style={styles.container}>
      <FontAwesome
        style={{ color: theme?.searchBar }}
        size={30}
        name="search"
      />
      <TextInput
        style={[
          styles.input,
          { borderColor: theme?.searchBar, color: theme?.searchBar }
        ]}
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
    marginVertical: 15,
    flexDirection: "row",
    paddingHorizontal: "5%",
    justifyContent: "space-evenly"
  },
  input: {
    borderRadius: 20,
    borderWidth: 1,
    width: "80%",
    paddingLeft: 15
  }
});

export default SearchBar;
