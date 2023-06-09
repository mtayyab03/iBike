import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

//screens
import HomeScreen from "../screens/HomeScreen";
import BikingScreen from "../screens/BikingScreen";
import Profilescreen from "../screens/Profilescreen";

//config
import Colors from "../config/Colors";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#7B7B7B",
        headerShown: false,
        tabBarStyle: {
          height: wp("15%"),
          padding: 3,
          paddingBottom: RFPercentage(1),
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="BikingScreen "
        component={BikingScreen}
        options={{
          tabBarLabel: "Biking",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bicycle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profilescreen"
        component={Profilescreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  activeIcon: {
    width: RFPercentage(6),
    height: RFPercentage(6),
    backgroundColor: Colors.third,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
