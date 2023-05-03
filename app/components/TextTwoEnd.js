import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TextTwoEnd({ title, subtitle }) {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        marginTop: RFPercentage(2.2),
      }}
    >
      <Text
        style={{
          fontFamily: FontFamily.regular,
          fontSize: RFPercentage(2.3),
          color: Colors.blacky,
          fontWeight: "400",
        }}
      >
        {title}
      </Text>
      <View style={{ position: "absolute", right: RFPercentage(2) }}>
        <Text
          style={{
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(2),
            color: Colors.darkgrey,
            fontWeight: "400",
          }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
