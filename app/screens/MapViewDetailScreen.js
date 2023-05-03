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

export default function MapViewDetailScreen(props) {
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
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("RidesScreen");
        }}
        style={{
          zIndex: 1,
          position: "absolute",
          top: RFPercentage(4),
          left: RFPercentage(3),
          backgroundColor: Colors.white,
          width: RFPercentage(6),
          height: RFPercentage(6),
          alignItems: "center",
          justifyContent: "center",
          borderRadius: RFPercentage(5),
          alignItems: "center",
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
        <Image
          style={{ width: RFPercentage(2), height: RFPercentage(3) }}
          source={require("../../assets/images/arrow.png")}
        />
      </TouchableOpacity>
      <MapView
        style={{
          flex: 1,
        }}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker
          coordinate={source}
          title="Start"
          description="Gulberg"
          image={require("../../assets/images/sourcepoint.png")}
        />

        <Marker
          coordinate={destination}
          title="End"
          description="Cape Capital"
          image={require("../../assets/images/destinationicon.png")}
        />
        <Polyline
          coordinates={polyline}
          strokeWidth={4}
          strokeColor={Colors.green}
        />
      </MapView>
      <View
        style={{
          zIndex: 1,
          position: "absolute",
          bottom: 0,
          backgroundColor: Colors.white,
          width: "100%",
          padding: RFPercentage(2),
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
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
        {/* time text */}
        <View style={{ width: "90%" }}>
          <Text
            style={{
              color: Colors.primary,
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.8),
            }}
          >
            Time
          </Text>
        </View>

        {/* main  */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            marginTop: RFPercentage(2),
          }}
        >
          {/* start circle */}
          <View
            style={{
              borderWidth: RFPercentage(0.5),
              borderColor: Colors.green,
              width: RFPercentage(2.5),
              height: RFPercentage(2.5),
              justifyContent: "center",
              borderRadius: RFPercentage(5),
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: Colors.green,
                width: RFPercentage(1),
                height: RFPercentage(1),
                borderRadius: RFPercentage(5),
              }}
            />
          </View>

          {/* start text */}
          <View style={{ width: "90%", marginLeft: RFPercentage(2) }}>
            <Text
              style={{
                color: Colors.primary,
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.5),
              }}
            >
              Start
            </Text>
            <View
              style={{
                width: "100%",
                marginTop: RFPercentage(0.7),
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: Colors.darkgrey,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(2),
                }}
              >
                4123 Big Green, LA, California
              </Text>
              <View style={{ position: "absolute", right: 0 }}>
                <Text
                  style={{
                    color: Colors.darkgrey,
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(2),
                  }}
                >
                  11:00am
                </Text>
              </View>
            </View>
            {/* start end */}

            {/* line */}
            <View
              style={{
                width: "100%",
                marginTop: RFPercentage(2),
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "85%",
                  height: RFPercentage(0.1),
                  backgroundColor: Colors.grey,
                  borderRadius: RFPercentage(1),
                }}
              />
              <View style={{ position: "absolute", right: 0 }}>
                <Text
                  style={{
                    color: Colors.blacky,
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(1.5),
                  }}
                >
                  32.5km
                </Text>
              </View>
            </View>
            {/* line end*/}
          </View>
        </View>

        {/* End start */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            marginTop: RFPercentage(2),
          }}
        >
          {/* Destination circle */}
          <View
            style={{
              borderWidth: RFPercentage(0.5),
              borderColor: Colors.red,
              width: RFPercentage(2.5),
              height: RFPercentage(2.5),
              justifyContent: "center",
              borderRadius: RFPercentage(5),
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: Colors.red,
                width: RFPercentage(1),
                height: RFPercentage(1),
                borderRadius: RFPercentage(5),
              }}
            />
          </View>

          {/* Destination text */}
          <View style={{ width: "90%", marginLeft: RFPercentage(2) }}>
            <Text
              style={{
                color: Colors.primary,
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.5),
              }}
            >
              End Point
            </Text>
            <View
              style={{
                width: "100%",
                marginTop: RFPercentage(0.7),
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: Colors.darkgrey,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(2),
                }}
              >
                3117 Doctors Drive, LA, California
              </Text>
              <View style={{ position: "absolute", right: 0 }}>
                <Text
                  style={{
                    color: Colors.darkgrey,
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(2),
                  }}
                >
                  02:00pm
                </Text>
              </View>
            </View>
          </View>
          {/* Destination end */}
        </View>
        {/* End point Exit */}

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            width: "90%",
            marginTop: RFPercentage(3),
            backgroundColor: Colors.green,
            height: RFPercentage(6),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: RFPercentage(1),
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(2.2),
            }}
          >
            30 Points
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
