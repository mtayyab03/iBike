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

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

//components
import MainHeader from "../components/MainHeader";
import TextTwoEnd from "../components/TextTwoEnd";
import AppModal from "../components/AppModal";

export default function NewsScreen(props) {
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
            title="Events"
            onpress={() => {
              props.navigation.navigate("EventScreen");
            }}
          />
        </ImageBackground>
      </View>

      <View style={{ marginTop: RFPercentage(18) }} />
      <Ionicons name="checkmark-circle" size={80} color={Colors.green} />
      <View style={styles.firmainboltext}>
        <Text style={styles.firboldtext}>Great News</Text>
        <View style={styles.firlighttextmain}>
          <Text style={styles.firlighttext}>
            Your request is successfully accepted and now you are joined in the
            event.
          </Text>
        </View>
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
  firmainboltext: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1),
  },
  firboldtext: {
    color: Colors.black,
    fontSize: RFPercentage(2.5),
    fontWeight: "700",
    fontFamily: FontFamily.semiBold,
  },
  firlighttextmain: {
    width: "70%",
    marginTop: RFPercentage(3),
    alignContent: "center",
    justifyContent: "center",
  },
  firlighttext: {
    color: Colors.darkgrey,
    fontSize: RFPercentage(2),
    fontWeight: "500",
    textAlign: "center",
    lineHeight: RFPercentage(3),
    fontFamily: FontFamily.regular,
  },
});
