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

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import TwoEndContainer from "../components/TwoEndContainer";

export default function Profilescreen(props) {
  const categoryList = [
    {
      id: 1,
      title: "Total Distance",
      imageSource: require("../../assets/images/distancelogo.png"),
    },
    {
      id: 2,
      title: "Total Rides",
      imageSource: require("../../assets/images/biclogo.png"),
    },
    {
      id: 3,
      title: "Total Points",
      imageSource: require("../../assets/images/pointslogo.png"),
    },
    {
      id: 4,
      title: "Average Points Per Ride ",
      imageSource: require("../../assets/images/timelogo.png"),
    },
  ];
  return (
    <View style={styles.screen}>
      <View style={{ width: "100%", height: RFPercentage(18) }}>
        <Image
          style={{
            width: "100%",
            height: RFPercentage(18),
          }}
          source={require("../../assets/images/profilebg.png")}
        />
      </View>

      {/* image */}
      <View
        style={{
          position: "relative",
          bottom: RFPercentage(5),
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: RFPercentage(10),
            height: RFPercentage(10),
            borderRadius: RFPercentage(6),
          }}
          source={require("../../assets/images/person1.png")}
        />
        <View style={{ marginTop: RFPercentage(1.5) }} />
        <Text
          style={{
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.2),
          }}
        >
          Jolina Lopez
        </Text>
      </View>

      {/* scroll left */}
      <ScrollView
        contentContainerStyle={{
          marginLeft: RFPercentage(3),
          flexDirection: "row",
          paddingRight: 30,
        }}
        style={{ flexGrow: 0 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categoryList.map((item, i) => (
          <View
            key={i}
            style={{
              width: RFPercentage(20),
              height: RFPercentage(12),
              backgroundColor: Colors.primary,
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
                style={{ width: RFPercentage(5), height: RFPercentage(5) }}
                source={item.imageSource}
              />
            </View>
            <View
              style={{
                width: RFPercentage(10),
                position: "absolute",
                bottom: RFPercentage(2),
                left: RFPercentage(3),
              }}
            >
              <Text
                style={{
                  marginTop: RFPercentage(1),
                  color: Colors.white,
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2),
                }}
              >
                {item.title}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* profile detail */}
      <View style={{ marginTop: RFPercentage(3) }} />
      <TwoEndContainer title="Name" subtitle="Jolina Lopez" />
      <TwoEndContainer title="Phone" subtitle="+1-111-111-111" />
      <TwoEndContainer title="Email" subtitle="joli@gmail.com" />
      <TwoEndContainer title="Adress" subtitle="102 st,AB town,Netherland" />

      {/* logout button */}
      <View
        style={{
          marginLeft: RFPercentage(2),
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(4),
        }}
      >
        <Image
          style={{
            width: RFPercentage(4),
            height: RFPercentage(4),
          }}
          source={require("../../assets/images/logouticon.png")}
        />

        <View style={{ marginLeft: RFPercentage(3) }} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("LoginScreen");
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2.5),
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
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
