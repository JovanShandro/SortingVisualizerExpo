import React from "react";
import { StyleSheet, View } from "react-native";
import CardFlip from "react-native-card-flip";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { Algorithm } from "../constants";
import InfoCard from "./InfoCard";
import VisualizationCard from "./VisualizationCard";

interface Props {
  item: Algorithm;
}

const FlipableCard: React.FC<Props> = ({ item }) => {
  let card: any;

  return (
    <View style={styles.container}>
      <CardFlip style={styles.cardContainer} ref={_card => (card = _card)}>
        <InfoCard
          style={[styles.card, styles.infoCard]}
          onPress={() => card.flip()}
          info={item.info}
        />
        <VisualizationCard
          style={[styles.card, styles.visualizationCard]}
          onPress={() => card.flip()}
          item={item}
        />
      </CardFlip>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: hp("3%")
  },
  cardContainer: {
    width: wp("90%"),
    height: hp("30%")
  },
  card: {
    width: wp("90%"),
    height: hp("30%"),
    borderRadius: wp("4%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  infoCard: {
    backgroundColor: "#BCD7D9"
  },
  visualizationCard: {
    backgroundColor: "#d0d0d0"
  }
});
export default FlipableCard;
