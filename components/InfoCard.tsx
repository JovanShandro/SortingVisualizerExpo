import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { AlgorithmInfo } from "../constants";
import { capitalize } from "../lib/utils";

interface Props {
  info: AlgorithmInfo;
  onPress(): void;
  style: ViewStyle[];
}

const InfoCard: React.FC<Props> = ({ info, onPress, style }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => {}}>
      <View style={style}>
        <View>
          <AntDesign
            style={styles.icon}
            name="arrowleft"
            size={30}
            onPress={onPress}
          />
        </View>
        <View style={styles.infoContainer}>
          {info &&
            Object.keys(info)
              .filter(key => key !== "extra")
              .map(key => {
                return (
                  <View style={styles.infoEntry} key={key}>
                    <Text style={styles.infoEntryTitle}>{capitalize(key)}</Text>
                    <Text style={styles.infoEntryText}>
                      {key === "stable"
                        ? (info as any)[key]
                          ? "Yes"
                          : "No"
                        : (info as any)[key]}
                    </Text>
                  </View>
                );
              })}
        </View>
        {info.extra && <Text style={styles.extraInfoText}>{info.extra}</Text>}
      </View>
    </TouchableOpacity>
  );
};

interface Style {
  icon: ViewStyle;
  infoContainer: ViewStyle;
  infoEntry: ViewStyle;
  extraInfoText: ViewStyle;
  infoEntryText: TextStyle;
  infoEntryTitle: TextStyle;
}

const styles = StyleSheet.create<Style>({
  icon: {
    color: "rgba(0, 0, 0, 0.54)",
    marginLeft: 5,
    marginTop: 5
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  infoEntry: {
    width: "33%",
    height: "45%"
  },
  infoEntryTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16
  },
  infoEntryText: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 15
  },
  extraInfoText: {
    color: "gray",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 10
  }
});

export default InfoCard;
