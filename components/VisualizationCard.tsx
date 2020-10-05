import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { Algorithm, ColumnBlueColors, ColumnRedColors } from "../constants";
import sorting_algorithms from "../lib/algorithms";
import { generateRandomArray } from "../lib/utils";

interface Props {
  item: Algorithm;
  onPress(): void;
  style: ViewStyle[];
}

const VisualizationCard: React.FC<Props> = ({ item, onPress, style }) => {
  const array = useRef(generateRandomArray());

  const [parameters, setParameters] = useState<any>(
    array.current.map(value => ({
      colors: ColumnBlueColors,
      height: value
    }))
  );

  const animate = (animations: number[][]) => {
    animations.forEach((value, ind) => {
      const m = ind % 3;
      if (m === 0) {
        setTimeout(() => {
          setParameters((prev: any) => {
            const copy = prev.slice();
            copy[value[0]].colors = ColumnRedColors;
            copy[value[1]].colors = ColumnRedColors;
            return copy;
          });
        }, ind * 15);
      } else if (m == 1) {
        setTimeout(() => {
          setParameters((prev: any) => {
            const copy = prev.slice();
            copy[value[0]].colors = ColumnBlueColors;
            copy[value[1]].colors = ColumnBlueColors;
            return copy;
          });
        }, ind * 15);
      } else {
        setTimeout(() => {
          setParameters((prev: any) => {
            const copy = prev.slice();
            const tmp = copy[value[0]].height;
            copy[value[0]].height = copy[value[1]].height;
            copy[value[1]].height = tmp;
            return copy;
          });
        }, ind * 15);
      }
    });
  };

  const handlePlay = () => {
    const animations: number[][] = [];

    // Sort array
    const sort = sorting_algorithms[item.name];
    sort(array.current, animations);

    // Animate sorting
    animate(animations);
  };

  const handleShuffle = () => {
    // Create new array
    const newArray = generateRandomArray();
    array.current = newArray;

    // Update ui
    setParameters(
      newArray.map(value => ({
        colors: ColumnBlueColors,
        height: value
      }))
    );
  };

  return (
    <TouchableOpacity style={style} activeOpacity={1} onPress={() => {}}>
      <Text style={[styles.header]}>{item.title}</Text>
      <View style={styles.board}>
        {parameters.map((value: any, ind: number) => (
          <LinearGradient
            key={ind}
            colors={value.colors}
            style={{ alignItems: "center", width: 10, height: value.height }}
          ></LinearGradient>
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
