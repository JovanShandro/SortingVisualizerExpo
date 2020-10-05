import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { Algorithm } from "../constants";
import { generateRandomArray } from "../lib/utils";

interface Props {
  item: Algorithm;
  onPress(): void;
  style: ViewStyle[];
}

const VisualizationCard: React.FC<Props> = ({ item, onPress, style }) => {
  const [array, setArray] = useState(generateRandomArray());
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

  const handleShuffle = () => {
    const newArray = generateRandomArray();
    setArray(newArray);
    setParameters(
      newArray.map(value => ({
        color: "lightseagreen",
        height: value
      }))
    );
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
              { height: value.height, backgroundColor: value.color }
            ]}
          ></View>
        ))}
      </View>
      <View style={styles.buttons}>
        <Entypo
          style={styles.icon}
          name="shuffle"
          size={24}
          color="black"
          onPress={handleShuffle}
        />
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
    alignItems: "flex-end",
    overflow: "hidden"
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
  column: {
    width: 5
  }
});

export default VisualizationCard;
