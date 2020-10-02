import Constants from "expo-constants";
import React, { useState } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextStyle,
  View,
  ViewStyle
} from "react-native";
import { useThemeContext } from "../lib/themeContext";

interface Props {
  setIsLightSchemaSet: any;
}

const Header: React.FC<Props> = ({ setIsLightSchemaSet }) => {
  const { theme } = useThemeContext();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(v => !v);
    setIsLightSchemaSet((previousState: boolean) => !previousState);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme?.headerBackground }]}
    >
      <Text style={[styles.header, { color: theme?.headerColor }]}>
        Sorting Visualizer
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "lightseagreen" }}
        thumbColor={isEnabled ? "darkcyan" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

interface Style {
  container: ViewStyle;
  header: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
    height: "12%",
    minHeight: 80
  },
  header: {
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default Header;
