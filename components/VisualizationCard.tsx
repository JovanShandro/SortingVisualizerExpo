import React, { useState, useEffect } from "react";
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
  const array = [20, 35, 52, 27, 113, 64, 20, 35, 52, 27, 103, 64];
  const animations = [
    [0, 2],
    [0, 2],
    [0, 52]
  ];
  const [parameters, setParameters] = useState<any>(
    array.map(value => ({
      color: "lightseagreen",
      height: value
    }))
  );

  const handlePlay = () => {
    animations.forEach((value, ind) => {
      const m = ind % 3;
      if (m === 0) {
        setTimeout(() => {
          setParameters((prev: any) => {
            const copy = prev.slice();
            copy[value[0]].color = "red";
            copy[value[1]].color = "red";
            return copy;
          });
        }, ind * 20);
      } else if (m == 1) {
        setTimeout(() => {
          setParameters((prev: any) => {
            const copy = prev.slice();
            copy[value[0]].color = "lightseagreen";
            copy[value[1]].color = "lightseagreen";
            return copy;
          });
        }, ind * 40);
      } else {
        setTimeout(() => {
          setParameters((prev: any) => {
            const copy = prev.slice();
            copy[value[0]].height = value[1];
            return copy;
          });
        }, ind * 60);
      }
    });
  };

  return (
    <TouchableOpacity style={style} activeOpacity={1} onPress={() => {}}>
      <Text style={[styles.header]}>{item.title}</Text>
      <View style={styles.board}>
        {parameters.map((value: any, ind: number) => (
          <View
            key={ind}
            style={[
              styles.column,
              { height: value.height, backgroundColor: value.color, width: 5 }
            ]}
          ></View>
        ))}
      </View>
      <View style={styles.buttons}>
        <Entypo style={styles.icon} name="shuffle" size={24} color="black" />
        <Entypo
          style={styles.icon}
          name="controller-play"
          size={32}
          color="black"
          onPress={handlePlay}
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
  column: ViewStyle;
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
    marginHorizontal: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end"
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
  },
  column: {}
});

export default VisualizationCard;
