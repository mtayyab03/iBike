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
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import * as yup from "yup";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import CardSwiper from "../components/CardSwiper";
import LogoTitle from "../components/LogoTitle";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function HomeScreen(props) {
  const categoryList = [
    {
      id: 1,
      title: "Shop",
      imageSource: require("../../assets/images/shopicon.png"),
      onpress: () => {
        props.navigation.navigate("Shopscreen");
      },
    },
    {
      id: 2,
      title: "Activity",
      imageSource: require("../../assets/images/activitylogo.png"),
      onpress: () => {
        props.navigation.navigate("EventScreen");
      },
    },
    {
      id: 3,
      title: "Brands",
      imageSource: require("../../assets/images/burgerlogo.png"),
      onpress: () => {
        props.navigation.navigate("BrandsScreen");
      },
    },
  ];
  return (
    <Screen style={styles.screen}>
      {/* Swiper horizontal */}
      <CardSwiper image={require("../../assets/images/sliderpic.png")} />

      {/* scroll left */}
      <ScrollView
        contentContainerStyle={{
          marginLeft: RFPercentage(3),
          paddingRight: 30,
          flexDirection: "row",
        }}
        style={{ flexShrink: 0 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categoryList.map((item, i) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={item.onpress}
            key={i}
            style={{
              width: RFPercentage(24),
              height: RFPercentage(15),
              backgroundColor: Colors.lightWhite,
              borderRadius: RFPercentage(1),
              padding: RFPercentage(2),
              marginRight: RFPercentage(2),
            }}
          >
            <View
              style={{
                position: "absolute",
                right: RFPercentage(2),
                top: RFPercentage(1),
              }}
            >
              <Image
                style={{ width: RFPercentage(9), height: RFPercentage(9) }}
                source={item.imageSource}
              />
            </View>
            <View
              style={{
                position: "absolute",
                bottom: RFPercentage(2),
                left: RFPercentage(3),
              }}
            >
              <Text
                style={{
                  marginTop: RFPercentage(1),
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2.5),
                }}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* feed text */}
      <View
        style={{
          width: "90%",
          marginTop: RFPercentage(5),
          marginBottom: RFPercentage(1),
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.8),
          }}
        >
          Feed
        </Text>
      </View>

      {/*Profile buttons list */}
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <LogoTitle
          imageSource={require("../../assets/images/newproductlogo.png")}
          title="New Products"
          //   onpress={() => {
          //     props.navigation.navigate("MessageScreen");
          //   }}
        />
        <LogoTitle
          imageSource={require("../../assets/images/bikelogo.png")}
          title="Rides"
          onpress={() => {
            props.navigation.navigate("RidesScreen");
          }}
        />
        <LogoTitle
          imageSource={require("../../assets/images/purchaseicon.png")}
          title="Points"
          onpress={() => {
            props.navigation.navigate("PointsScreen");
          }}
        />
        <LogoTitle
          imageSource={require("../../assets/images/eventicon.png")}
          title="Events"
          onpress={() => {
            props.navigation.navigate("EventScreen");
          }}
        />
        <LogoTitle
          imageSource={require("../../assets/images/bellicon.png")}
          title="Notifications"
          onpress={() => {
            props.navigation.navigate("NotificationScreen");
          }}
        />
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});
