import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useThemeContext } from "../lib/themeContext";

interface Props {
  setIsLightSchemaSet: any;
}

const Header: React.FC<Props> = ({ setIsLightSchemaSet }) => {
  const { theme } = useThemeContext();
  console.log("theme is ", theme);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="ktu"
        onPress={() => setIsLightSchemaSet((a: boolean) => !a)}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Header;
