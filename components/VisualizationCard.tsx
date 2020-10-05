import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  View,
  TextStyle
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Algorithm } from "../constants";

interface Props {
  item: Algorithm;
  onPress(): void;
  style: ViewStyle[];
}

const VisualizationCard: React.FC<Props> = ({ item, onPress, style }) => {
  return (
    <TouchableOpacity style={style} activeOpacity={1} onPress={() => {}}>
      <Text style={[styles.header]}>{item.title}</Text>
      <View style={styles.board}></View>
      <View style={styles.buttons}>
        <Entypo style={styles.icon} name="shuffle" size={24} color="black" />
        <Entypo
          style={styles.icon}
          name="controller-play"
          size={32}
          color="black"
        />
        <Entypo
          style={styles.icon}
          name="info-with-circle"
          size={24}
          color="black"
          onPress={onPress}
        />
      </View>
    </TouchableOpacity>
  );
};

interface Style {
  header: TextStyle;
  board: ViewStyle;
  buttons: ViewStyle;
  icon: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  header: {
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17
  },
  board: {
    flex: 1,
    backgroundColor: "lightseagreen",
    marginHorizontal: "10%"
  },
  buttons: {
    flexDirection: "row",
    height: "20%",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: "15%"
  },
  icon: {
    color: "#00000099"
  }
});

export default VisualizationCard;
