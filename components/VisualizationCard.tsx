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

const AnimationSpeed = 40;

const VisualizationCard: React.FC<Props> = ({ item, onPress, style }) => {
  const [isSearching, setIsSearching] = useState(false);
  const array = useRef(generateRandomArray());

  const [parameters, setParameters] = useState<any>(
    array.current.map(value => ({
      colors: ColumnBlueColors,
      height: value
    }))
  );

  const promisify = (func: Function, ms: number) => {
    return new Promise(resolve =>
      setTimeout(() => {
        func();
        resolve();
      }, ms)
    );
  };

  const animate = async (animations: number[][], swap: boolean) => {
    return await Promise.all(
      animations.map(async (value, ind) => {
        const isColorChange = ind % 3 !== 2;
        if (isColorChange && value[0] !== value[1]) {
          const color = ind % 3 === 0 ? ColumnRedColors : ColumnBlueColors;
          return await promisify(() => {
            setParameters((prev: any) => {
              const copy = prev.slice();
              copy[value[0]].colors = color;
              copy[value[1]].colors = color;
              return copy;
            });
          }, ind * AnimationSpeed);
        } else {
          if (swap) {
            return await promisify(() => {
              setParameters((prev: any) => {
                const copy = prev.slice();
                const tmp = copy[value[0]].height;
                copy[value[0]].height = copy[value[1]].height;
                copy[value[1]].height = tmp;
                return copy;
              });
            }, ind * AnimationSpeed);
          } else if (value[0] !== value[1]) {
            return await promisify(() => {
              setParameters((prev: any) => {
                const copy = prev.slice();
                copy[value[0]].height = value[1];
                return copy;
              });
            }, ind * AnimationSpeed);
          }
        }
      })
    );
  };

  const handlePlay = async () => {
    if (isSearching) return;
    const animations: number[][] = [];

    // Sort array
    setIsSearching(true);
    const sort = sorting_algorithms[item.name];
    sort(array.current, animations);

    // Animate sorting
    await animate(animations, item.name !== "merge");
    setIsSearching(false);
  };

  const handleShuffle = () => {
    if (isSearching) return;
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

  const iconColor = isSearching ? "#00000044" : "#00000099";

  return (
    <TouchableOpacity style={style} activeOpacity={1} onPress={() => {}}>
      <Text style={[styles.header]}>{item.title}</Text>
      <View style={styles.board}>
        {parameters.map((value: any, ind: number) => (
          <LinearGradient
            key={ind}
            colors={value.colors}
            style={{ alignItems: "center", width: 20, height: value.height }}
          ></LinearGradient>
        ))}
      </View>
      <View style={styles.buttons}>
        <Entypo
          style={styles.icon}
          name="shuffle"
          size={24}
          color={iconColor}
          onPress={handleShuffle}
        />
        <Entypo
          style={styles.icon}
          name="controller-play"
          size={32}
          color={iconColor}
          onPress={handlePlay}
        />
        <Entypo
          style={styles.icon}
          name="info-with-circle"
          size={24}
          color={iconColor}
          onPress={isSearching ? () => {} : onPress}
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
    //color: "#00000099"
  },
  column: {
    width: 5
  }
});

export default VisualizationCard;
