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

export default function NotificationScreen(props) {
  const categoryList = [
    {
      id: 1,
      title: "We've added: Amazon Giftcards",
      subtitle: "Their a very long distance tour ,Best luck!",
      imageSource: require("../../assets/images/gifticon.png"),
    },
    {
      id: 2,
      title: "We've added an Heineken event ",
      subtitle: "Their a very long distance tour ,Best luck! oky",
      imageSource: require("../../assets/images/festicon.png"),
    },
    {
      id: 3,
      title: "You biked from Herengracht to Kinkerstraat",
      subtitle: "Their a very long distance tour ,Best luck! doky",
      imageSource: require("../../assets/images/cycleicon.png"),
    },
    {
      id: 3,
      title: "We've updated the app, check the updates",
      subtitle: "Their a very long distance tour ,Best luck!",
      imageSource: require("../../assets/images/updatelogo.png"),
    },
    {
      id: 4,
      title: "You biked from Miching to Harvard ",
      subtitle: "Their a very long distance tour ,Best luck! oky",
      imageSource: require("../../assets/images/festicon.png"),
    },
    {
      id: 5,
      title: "We've added: Product Giftcards",
      subtitle: "Their a very long distance tour ,Best luck! doky",
      imageSource: require("../../assets/images/gifticon.png"),
    },
  ];
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
            title="Notifications"
            onpress={() => {
              props.navigation.navigate("BottomTab", {
                screen: "HomeScreen",
              });
            }}
          />
        </ImageBackground>
      </View>

      {/* notification maping */}
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {categoryList.map((item, i) => (
          <>
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() => {
                props.navigation.navigate("NotificationDetail");
              }}
              style={{
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
                marginTop: RFPercentage(4),
              }}
            >
              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  style={{
                    width: RFPercentage(9),
                    height: RFPercentage(9),
                    borderRadius: RFPercentage(5),
                  }}
                  source={item.imageSource}
                />
              </TouchableOpacity>

              <View style={{ marginLeft: RFPercentage(3) }}>
                <View style={{ width: "98%" }}>
                  <Text
                    style={{
                      fontSize: RFPercentage(2.2),
                      color: Colors.blacky,
                      fontFamily: FontFamily.medium,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
                <View style={{ marginTop: RFPercentage(0.3) }} />
                <TouchableOpacity activeOpacity={0.7}>
                  <Text
                    style={{
                      fontSize: RFPercentage(1.8),
                      color: Colors.grey,
                      fontFamily: FontFamily.regular,
                      lineHeight: RFPercentage(3.3),
                    }}
                  >
                    {item.subtitle}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={{ width: "90%", marginTop: RFPercentage(1.5) }}>
              <AppLine />
            </View>
          </>
        ))}
      </ScrollView>
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
});
