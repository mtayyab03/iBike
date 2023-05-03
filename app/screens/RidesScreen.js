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
import MapView, { Marker, Polyline } from "react-native-maps";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

// components
import MainHeader from "../components/MainHeader";
export default function RidesScreen(props) {
  const [region, setRegion] = React.useState({
    latitude: 52.0907,
    longitude: 5.1214,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const source = {
    latitude: 52.0885,
    longitude: 5.1329,
  };

  const destination = {
    latitude: 52.0911,
    longitude: 5.1207,
  };

  const polyline = [
    { latitude: 52.0885, longitude: 5.1329 },
    { latitude: 52.0911, longitude: 5.1207 },
  ];
  const categoryList = [
    {
      id: 1,
      date: "02/04/2023",
      title: "Limo brand & Ideas brand",
      sourceplace: "Gulberg Street 3",
      destinationplace: "Satellite Street 2",
    },

    {
      id: 2,
      date: "21/03/2023",
      title: "Molocos brand & Telcomise brand",
      sourceplace: "Narang Street 3",
      destinationplace: "Metro Street 2",
    },
    {
      id: 3,
      date: "01/03/2023",
      title: "Zehm brand & Colom brand",
      sourceplace: "Mega Street 3",
      destinationplace: "Effiel Street 2",
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
            title="Rides"
            onpress={() => {
              props.navigation.navigate("BottomTab", {
                screen: "HomeScreen",
              });
            }}
          />
        </ImageBackground>
      </View>

      {/* route detail */}
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {categoryList.map((item, i) => (
          <View key={i} style={{ width: "90%" }}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                marginTop: RFPercentage(3),
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2.2),
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                }}
              >
                {item.sourceplace}
              </Text>
              <View style={{ marginLeft: RFPercentage(1.5) }} />
              <Image
                style={{ width: RFPercentage(3), height: RFPercentage(3) }}
                source={require("../../assets/images/arrowright.png")}
              />
              <View style={{ marginLeft: RFPercentage(1.5) }} />

              <Text
                style={{
                  fontSize: RFPercentage(2.2),
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                }}
              >
                {item.destinationplace}
              </Text>
            </View>

            {/* map card */}
            <View
              style={{
                marginRight: RFPercentage(2),
                width: "100%",
                marginTop: RFPercentage(1.5),
                height: RFPercentage(30),
                borderRadius: RFPercentage(1),
                backgroundColor: Colors.white,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <MapView
                style={{
                  borderTopLeftRadius: RFPercentage(1),
                  borderTopRightRadius: RFPercentage(1),
                  width: "100%",
                  height: RFPercentage(23),
                }}
                region={region}
                onRegionChangeComplete={setRegion}
              >
                <Marker
                  coordinate={source}
                  title="Start"
                  description={item.sourceplace}
                  image={require("../../assets/images/sourcepoint.png")}
                />

                <Marker
                  coordinate={destination}
                  title="End"
                  description={item.destinationplace}
                  image={require("../../assets/images/destinationicon.png")}
                />
                <Polyline
                  coordinates={polyline}
                  strokeWidth={4}
                  strokeColor={Colors.green}
                />
              </MapView>

              {/* img title join */}
              <View
                style={{
                  width: "94%",
                  marginLeft: RFPercentage(1),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: RFPercentage(0.9),
                }}
              >
                <View
                  style={{
                    width: "70%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <View style={{ marginLeft: RFPercentage(1.5) }}>
                    <Text
                      style={{
                        fontSize: RFPercentage(1.9),
                        color: Colors.blacky,
                        fontFamily: FontFamily.medium,
                      }}
                    >
                      {item.date}
                    </Text>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Text
                        style={{
                          fontSize: RFPercentage(1.6),
                          color: Colors.grey,
                          fontFamily: FontFamily.regular,
                          lineHeight: RFPercentage(3.3),
                        }}
                      >
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* join */}
                <View
                  style={{
                    width: "30%",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      props.navigation.navigate("MapViewDetailScreen");
                    }}
                    style={{
                      width: RFPercentage(7),
                      alignItems: "center",
                      justifyContent: "center",
                      height: RFPercentage(4),
                      borderRadius: RFPercentage(1),
                      backgroundColor: Colors.lightWhite,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFPercentage(1.5),
                        color: Colors.blacky,
                        fontFamily: FontFamily.regular,
                        lineHeight: RFPercentage(3.3),
                      }}
                    >
                      View
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
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
