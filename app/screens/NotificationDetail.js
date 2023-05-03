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
import TwoEndContainer from "../components/TwoEndContainer";
import AppLine from "../components/AppLine";

export default function NotificationDetail(props) {
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
              onPress={() => {
                props.navigation.navigate("NotificationScreen");
              }}
              style={{ position: "absolute", left: 0 }}
            >
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                }}
                source={require("../../assets/images/arrowleft.png")}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: RFPercentage(3.5),
                color: Colors.white,
                fontFamily: FontFamily.medium,
              }}
            >
              Notification
            </Text>
          </View>
        </ImageBackground>
      </View>

      <TouchableOpacity
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
            source={require("../../assets/images/person2.png")}
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
              Shanel Remo
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
              Their a very long distance tour ,Best luck!
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <View style={{ marginTop: RFPercentage(3) }} />
      <View style={{ width: "90%" }}>
        <Text
          style={{
            fontSize: RFPercentage(2),
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
            lineHeight: RFPercentage(4),
          }}
        >
          Lorem ipsum dolor sit amet consectetur. In sem aliquet feugiat nibh
          blandit id nisl purus maecenas. Adipiscing porttitor congue odio
          vestibulum sed ultrices amet vel dui. Interdum nisl turpis sit sed in
          est. Phasellus quam dui tristique nibh et aliquam pulvinar leo. Diam
          phasellus at nulla porta orci. Volutpat lorem nibh amet scelerisque
          ac. Arcu blandit urna nulla ullamcorper venenatis elit neque penatibus
          commodo.
        </Text>
      </View>

      {/* button */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: "90%",
          position: "absolute",
          bottom: RFPercentage(5),
          flexDirection: "row",
          height: RFPercentage(7),
          borderRadius: RFPercentage(1),
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.green,
        }}
      >
        <Text style={styles.buttontext}>Feel Free to Whatsapp us</Text>
        <Image
          style={{
            marginLeft: RFPercentage(1),
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={require("../../assets/images/whatsappimg.png")}
        />
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
  buttontext: {
    color: Colors.white,
    fontSize: RFPercentage(2.5),
    fontWeight: "500",
    fontFamily: FontFamily.medium,
  },
});
