import React, { useState } from "react";
import { View, StyleSheet, ViewStyle, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useThemeContext } from "../lib/themeContext";

interface Props {}

const SearchBar: React.FC<Props> = ({}) => {
  const { theme } = useThemeContext();

  const [searchedString, setSearchedString] = useState("");
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
        onChangeText={text => setSearchedString(text)}
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
