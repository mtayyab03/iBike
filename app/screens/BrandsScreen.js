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
export default function BrandsScreen(props) {
  const BrandList = [
    {
      id: 1,
      title: "Burger King",
      imageSource: require("../../assets/images/burgerlogo.png"),
    },
    {
      id: 2,
      title: "Tositoros",
      imageSource: require("../../assets/images/tostos.png"),
    },
  ];
  const categoryList = [
    {
      id: 1,
      title: "Melan Event",
      subtitle: "Enjoyment till the end of the day",
      imageSource: require("../../assets/images/giftimg.png"),
    },
    {
      id: 2,
      title: "Kitsu Event",
      subtitle: "Enjoyment till the end of the day",
      imageSource: require("../../assets/images/eventimage2.png"),
    },
    {
      id: 3,
      title: "Melan Event",
      subtitle: "Enjoyment till the end of the day",
      imageSource: require("../../assets/images/eventimg1.png"),
    },
  ];
  const productList = [
    {
      id: 1,
      title: "Melan Event",
      subtitle: "Enjoyment till the end of the day",
      imageSource: require("../../assets/images/eventimage2.png"),
      // imageMain: require("../../assets/images/shopicon.png"),
    },
    {
      id: 2,
      title: "Kitsu Event",
      subtitle: "Enjoyment till the end of the day",
      imageSource: require("../../assets/images/productimage2.png"),
    },
    {
      id: 3,
      title: "Melan Event",
      subtitle: "Enjoyment till the end of the day",
      imageSource: require("../../assets/images/eventimage2.png"),
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
            title="Brands"
            onpress={() => {
              props.navigation.navigate("BottomTab", {
                screen: "HomeScreen",
              });
            }}
          />
        </ImageBackground>
      </View>

      {/* Select text */}
      <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2),
          }}
        >
          You've selected these brands:
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: RFPercentage(1.5) }}>
        {BrandList.map((item, i) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={i}
            style={{
              width: "42%",
              height: RFPercentage(12),
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
                style={{ width: RFPercentage(5), height: RFPercentage(5) }}
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
                  fontSize: RFPercentage(2),
                }}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Most Popular text */}
      <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(3),
          }}
        >
          Popular
        </Text>
      </View>

      {/* //card scroll */}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: RFPercentage(3),
          marginRight: RFPercentage(7),
          flexDirection: "row",
          paddingRight: 20,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categoryList.map((item, i) => (
          <View
            key={i}
            style={{
              marginRight: RFPercentage(2),
              width: RFPercentage(47),
              height: RFPercentage(24),
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
            <Image
              style={{
                borderTopLeftRadius: RFPercentage(1),
                borderTopRightRadius: RFPercentage(1),
                width: "100%",
                height: RFPercentage(17),
              }}
              source={item.imageSource}
            />

            {/* img title join */}
            <View
              style={{
                width: "94%",
                marginLeft: RFPercentage(1),
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: RFPercentage(0.8),
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
                <TouchableOpacity activeOpacity={0.7}>
                  <Image
                    style={{
                      width: RFPercentage(4.5),
                      height: RFPercentage(4.5),
                      borderRadius: RFPercentage(0.5),
                    }}
                    source={item.imageSource}
                  />
                </TouchableOpacity>

                <View style={{ marginLeft: RFPercentage(1.5) }}>
                  <Text
                    style={{
                      fontSize: RFPercentage(1.5),
                      color: Colors.blacky,
                      fontFamily: FontFamily.medium,
                    }}
                  >
                    {item.title}
                  </Text>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Text
                      style={{
                        fontSize: RFPercentage(1.5),
                        color: Colors.grey,
                        fontFamily: FontFamily.regular,
                        lineHeight: RFPercentage(3.3),
                      }}
                    >
                      {item.subtitle}
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
                    props.navigation.navigate("ProductsScreens");
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
                    Get
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Most Popular text */}
      <View style={{ width: "90%", marginTop: RFPercentage(1) }}>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(3),
          }}
        >
          Products
        </Text>
      </View>

      {/* //card scroll */}
      <ScrollView
        contentContainerStyle={{ marginTop: RFPercentage(1), paddingLeft: 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row-reverse" }}>
          {productList.map((item, i) => (
            <View
              key={i}
              style={{
                marginRight: RFPercentage(2),
                width: RFPercentage(47),
                height: RFPercentage(24),
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
              <Image
                style={{
                  borderTopLeftRadius: RFPercentage(1),
                  borderTopRightRadius: RFPercentage(1),
                  width: "100%",
                  height: RFPercentage(17),
                }}
                source={item.imageSource}
              />

              {/* img title join */}
              <View
                style={{
                  width: "94%",
                  marginLeft: RFPercentage(1),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: RFPercentage(0.8),
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
                  <TouchableOpacity activeOpacity={0.7}>
                    <Image
                      style={{
                        width: RFPercentage(4.5),
                        height: RFPercentage(4.5),
                        borderRadius: RFPercentage(0.5),
                      }}
                      source={item.imageSource}
                    />
                  </TouchableOpacity>

                  <View style={{ marginLeft: RFPercentage(1.5) }}>
                    <Text
                      style={{
                        fontSize: RFPercentage(1.5),
                        color: Colors.blacky,
                        fontFamily: FontFamily.medium,
                      }}
                    >
                      {item.title}
                    </Text>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Text
                        style={{
                          fontSize: RFPercentage(1.5),
                          color: Colors.grey,
                          fontFamily: FontFamily.regular,
                          lineHeight: RFPercentage(3.3),
                        }}
                      >
                        {item.subtitle}
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
                      props.navigation.navigate("ProductsScreens");
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
                      Get
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
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
