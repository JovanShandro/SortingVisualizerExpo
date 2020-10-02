import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { Algorithm } from "../constants";

interface Props {
  item: Algorithm;
  onPress(): void;
  style: ViewStyle[];
}

const InfoCard: React.FC<Props> = ({ item, onPress, style }) => {
  return (
    <TouchableOpacity style={style} activeOpacity={1} onPress={onPress}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default InfoCard;
