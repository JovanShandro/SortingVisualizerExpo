import React from "react";
import { FlatList } from "react-native";
import { AlgorithmNames, algorithmsData } from "../constants";
import FlipableCard from "./FlipableCard";

interface Props {
  algorithms: string[];
}

const FlipableCardList: React.FC<Props> = ({ algorithms }) => {
  const data = algorithms.map(name => algorithmsData[name as AlgorithmNames]);

  const renderItem = ({ item }: any) => {
    return <FlipableCard item={item} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.title}
      renderItem={renderItem}
    />
  );
};

export default FlipableCardList;
