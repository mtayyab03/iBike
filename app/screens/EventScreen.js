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

export default function EventScreen(props) {
  const [Name, onChangeName] = useState("");
  const [Brand, onChangeBrand] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const categoryList = [
    {
      id: 1,
      title: "Melan Event",
      subtitle: "Enjoyment till the end of the day",
      imageSource: require("../../assets/images/eventimg1.png"),
      mainTitle: "Melan Event",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque quismolestie egestas nisl sit feugiat.",
    },
    {
      id: 2,
      title: "Kitsu Event",
      subtitle: "Enjoyment till the end of the day",
      imageSource: require("../../assets/images/eventimage2.png"),
      mainTitle: "Kitsu Event",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque quismolestie egestas nisl sit feugiat.",
    },
    {
      id: 3,
      title: "Ace Event",
      subtitle: "Enjoyment till the end of the day",
      imageSource: require("../../assets/images/eventimg1.png"),
      mainTitle: "Ace Event",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque quismolestie egestas nisl sit feugiat.",
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
            title="Events"
            onpress={() => {
              props.navigation.navigate("BottomTab", {
                screen: "HomeScreen",
              });
            }}
          />
        </ImageBackground>
      </View>

      {/* inputs filter */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          marginTop: RFPercentage(4),
          alignItems: "center",
        }}
      >
        <View style={styles.emailmain}>
          <TextInput
            onChangeText={onChangeName}
            value={Name}
            placeholder="City"
            placeholderTextColor={Colors.placeholder}
          />
        </View>
        <View style={{ marginLeft: RFPercentage(2) }} />
        <View style={styles.emailmain}>
          <TextInput
            onChangeText={onChangeBrand}
            value={Brand}
            placeholder="Brand"
            placeholderTextColor={Colors.placeholder}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("NewsScreen");
          }}
        >
          <Image
            style={{
              marginLeft: RFPercentage(2),
              width: RFPercentage(6),
              height: RFPercentage(6),
            }}
            source={require("../../assets/images/filterlogo.png")}
          />
        </TouchableOpacity>
      </View>

      {/* //card scroll */}
      <ScrollView
        contentContainerStyle={{
          marginTop: RFPercentage(3),
          marginLeft: RFPercentage(3),
          marginRight: RFPercentage(7),
          flexDirection: "row",
          paddingRight: 20,
          paddingBottom: RFPercentage(6),
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
              height: RFPercentage(45),
              borderRadius: RFPercentage(1),
              backgroundColor: Colors.white,
            }}
          >
            <Image
              style={{
                borderTopLeftRadius: RFPercentage(1),
                borderTopRightRadius: RFPercentage(1),
                width: "100%",
                height: RFPercentage(21),
              }}
              source={item.imageSource}
            />

            {/* img title join */}
            <View
              style={{
                width: "100%",
                backgroundColor: Colors.white,
                flexDirection: "row",
                padding: RFPercentage(1),
                borderBottomLeftRadius: RFPercentage(1),
                borderBottomRightRadius: RFPercentage(1),
                paddingLeft: RFPercentage(2),
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
            </View>

            {/* login text */}
            <View>
              <Text
                style={{
                  marginTop: RFPercentage(4),
                  color: Colors.primary,
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2.5),
                }}
              >
                {item.mainTitle}
              </Text>
              <View style={{ marginTop: RFPercentage(1) }} />
              <Text
                style={{
                  fontSize: RFPercentage(2),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                  lineHeight: RFPercentage(4),
                }}
              >
                {item.description}
              </Text>
            </View>

            {/* join */}

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setModalVisible(true)}
              style={{
                marginTop: RFPercentage(1.8),
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                height: RFPercentage(6),
                borderRadius: RFPercentage(1),
                backgroundColor: Colors.primary,
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2.5),
                  color: Colors.white,
                  fontFamily: FontFamily.medium,
                }}
              >
                Join Event
              </Text>
            </TouchableOpacity>

            <TextTwoEnd title="Reward" subtitle="570 points" />
            <TextTwoEnd title="Date" subtitle="10:15 am 17-02-2023" />
            <TextTwoEnd
              title="Location"
              subtitle="Wesses Palace frontier,Atlanta"
            />
          </View>
        ))}
      </ScrollView>

      <View style={{ marginBottom: RFPercentage(2) }} />
      {/* modal */}
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        style={{ justifyContent: "center", padding: RFPercentage(3) }}
      >
        <Ionicons name="checkmark-circle" size={100} color={Colors.green} />
        <View style={styles.firmainboltext}>
          <Text style={styles.firboldtext}>Request Sent</Text>
          <View style={styles.firlighttextmain}>
            <Text style={styles.firlighttext}>
              Your request sent to the admin.You get the news when it will be
              accepted.
            </Text>
          </View>
        </View>

        {/* button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.firbuttonmaincon}
        >
          <Text style={styles.firbuttontext}>Continue</Text>
        </TouchableOpacity>
      </AppModal>
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
  emailmain: {
    width: "39%",
    height: RFPercentage(7),
    backgroundColor: Colors.lightWhite,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.lightWhite,
    color: Colors.black,
    paddingLeft: RFPercentage(3),
    borderRadius: RFPercentage(1.5),
    justifyContent: "center",
  },

  // 1st modal
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
    marginTop: RFPercentage(4),
    alignContent: "center",
    justifyContent: "center",
  },
  firlighttext: {
    color: Colors.grey,
    fontSize: RFPercentage(2),
    fontWeight: "500",
    textAlign: "center",
    lineHeight: RFPercentage(3),
    fontFamily: FontFamily.regular,
  },
  firbuttonmaincon: {
    marginBottom: RFPercentage(2),
    marginTop: RFPercentage(3),
    width: RFPercentage(35),
    height: RFPercentage(6),
    borderRadius: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.green,
  },
  firbuttontext: {
    color: Colors.white,
    fontSize: RFPercentage(2.2),
    fontWeight: "700",
    fontFamily: FontFamily.semiBold,
  },
});
