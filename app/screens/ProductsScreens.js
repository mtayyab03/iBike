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
import Ionicons from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

//components
import MainHeader from "../components/MainHeader";
import TextTwoEnd from "../components/TextTwoEnd";
import AppButton from "../components/AppButton";

export default function ProductsScreens(props) {
  const image = require("../../assets/images/giftproductimg.png");
  return (
    <View style={styles.screen}>
      <View style={{ width: "100%", height: RFPercentage(15) }}>
        <ImageBackground
          style={{
            width: "100%",
            height: RFPercentage(15),
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          source={require("../../assets/images/notibg.png")}
        >
          <MainHeader
            imageSource={require("../../assets/images/arrowleft.png")}
            title="Products"
            onpress={() => {
              props.navigation.navigate("BottomTab", {
                screen: "HomeScreen",
              });
            }}
          />
        </ImageBackground>
      </View>

      {/* card swiper */}
      <View
        style={{
          width: "100%",
          height: RFPercentage(28),
          backgroundColor: Colors.grey,
          marginBottom: RFPercentage(3),
        }}
      >
        <Swiper
          activeDotColor={Colors.primary}
          dotColor="#BBB8B8"
          activeDotStyle={{}}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{
                width: "100%",
                height: RFPercentage(28),
              }}
              source={image}
            />
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{
                width: "100%",
                height: RFPercentage(28),
              }}
              source={image}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{
                width: "100%",
                height: RFPercentage(28),
              }}
              source={image}
            />
          </View>
        </Swiper>
      </View>

      {/* login text */}
      <View style={{ width: "90%" }}>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.5),
          }}
        >
          Detail
        </Text>
        <View style={{ marginTop: RFPercentage(1) }} />
        <Text
          style={{
            fontSize: RFPercentage(2),
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
            lineHeight: RFPercentage(4),
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Scelerisque quis molestie
          egestas nisl sit feugiat. Sed feugiat egestas quisque risus .
        </Text>
      </View>

      <View style={{ marginTop: RFPercentage(3) }} />
      <View style={{ width: "90%" }}>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.5),
          }}
        >
          Specification
        </Text>
      </View>
      <View style={{ marginTop: RFPercentage(1) }} />

      <TextTwoEnd title="Modal" subtitle="2023" />
      <TextTwoEnd title="Weight" subtitle="1600kg" />
      <TextTwoEnd title="Price" subtitle="23900$" />

      {/* button */}
      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("LoginScreen");
        }}
      >
        <AppButton title="Get Now" buttonColor={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(4),
  },
});
