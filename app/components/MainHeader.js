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

export default function MainHeader({ imageSource, title, onpress }) {
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: RFPercentage(4),
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onpress}
        style={{ position: "absolute", left: 0 }}
      >
        <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={imageSource}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: RFPercentage(3.5),
          color: Colors.white,
          fontFamily: FontFamily.medium,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
