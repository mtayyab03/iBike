import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TitleDateRup({ title, date, rupees }) {
  return (
    <View
      style={{
        width: "90%",
        marginTop: RFPercentage(2),
        backgroundColor: Colors.purewhite,
        borderRadius: RFPercentage(1),
        borderWidth: RFPercentage(0.2),
        borderColor: Colors.lightWhite,
        padding: RFPercentage(2.5),
      }}
    >
      <View
        style={{ width: "100%", alignItems: "center", flexDirection: "row" }}
      >
        <View style={{ width: "80%" }}>
          <Text
            style={{
              fontSize: RFPercentage(2.5),
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
            }}
          >
            {title}
          </Text>
          <View style={{ marginTop: RFPercentage(1.5) }} />
          <Text
            style={{
              fontSize: RFPercentage(2),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            Completed {date}
          </Text>
        </View>
        <View style={{ marginLeft: RFPercentage(1) }} />
        <View style={{ position: "absolute", right: 0, flexDirection: "row" }}>
          <Text
            style={{
              fontSize: RFPercentage(2.5),
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
            }}
          >
            R{rupees}
          </Text>
        </View>
      </View>
    </View>
  );
}
