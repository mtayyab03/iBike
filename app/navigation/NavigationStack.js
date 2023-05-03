import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

//screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import NotificationScreen from "../screens/NotificationScreen";
import NotificationDetail from "../screens/NotificationDetail";
import EventScreen from "../screens/EventScreen";
import NewsScreen from "../screens/NewsScreen";
import Shopscreen from "../screens/Shopscreen";
import ProductsScreens from "../screens/ProductsScreens";
import BrandsScreen from "../screens/BrandsScreen";
import RidesScreen from "../screens/RidesScreen";
import MapViewDetailScreen from "../screens/MapViewDetailScreen";
import PointsScreen from "../screens/PointsScreen";
import OtpScreen from "../screens/OtpScreen";

//navigation
import BottomTab from "./BottomTab";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "false" }}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="NotificationDetail" component={NotificationDetail} />
      <Stack.Screen name="EventScreen" component={EventScreen} />
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
      <Stack.Screen name="Shopscreen" component={Shopscreen} />
      <Stack.Screen name="ProductsScreens" component={ProductsScreens} />
      <Stack.Screen name="BrandsScreen" component={BrandsScreen} />
      <Stack.Screen name="RidesScreen" component={RidesScreen} />
      <Stack.Screen name="PointsScreen" component={PointsScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />

      <Stack.Screen
        name="MapViewDetailScreen"
        component={MapViewDetailScreen}
      />

      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
