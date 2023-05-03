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

// components
import MainHeader from "../components/MainHeader";
import AppLine from "../components/AppLine";

export default function PointsScreen(props) {
  return (
    <View style={styles.screen}>
      <View
        style={{
          width: "100%",
          height: RFPercentage(15),
          position: "absolute",
          top: 0,
        }}
      >
        <ImageBackground
          style={{
            width: "100%",
            height: RFPercentage(15),
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          source={require("../../assets/images/pointimage.png")}
        >
          <MainHeader
            imageSource={require("../../assets/images/arrowleft.png")}
            title="Points"
            onpress={() => {
              props.navigation.navigate("BottomTab", {
                screen: "HomeScreen",
              });
            }}
          />
        </ImageBackground>
      </View>

      {/* reward */}
      <View
        style={{
          backgroundColor: Colors.lightyellow,
          width: RFPercentage(22),
          height: RFPercentage(22),
          alignItems: "center",
          justifyContent: "center",
          borderRadius: RFPercentage(11),
        }}
      >
        <Image
          style={{ width: RFPercentage(17), height: RFPercentage(17) }}
          source={require("../../assets/images/rewardlogo.png")}
        />
      </View>

      <View style={{ marginTop: RFPercentage(2) }} />
      <Text
        style={{
          color: Colors.darkgrey,
          fontFamily: FontFamily.medium,
          fontSize: RFPercentage(2.5),
        }}
      >
        Points
      </Text>

      {/* button type */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: "50%",
          marginTop: RFPercentage(3),
          backgroundColor: Colors.primary,
          height: RFPercentage(6),
          alignItems: "center",
          justifyContent: "center",
          borderRadius: RFPercentage(1),
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.2),
          }}
        >
          120,342
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});
