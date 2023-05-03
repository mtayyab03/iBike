import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import * as yup from "yup";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function LoginScreen(props) {
  const [eyeIcon, setEyeIcon] = useState(false);
  const [Name, onChangeName] = useState("");
  const [Password, onChangePassword] = useState("");
  const [Cpassword, onChangeCpassword] = useState("");

  return (
    <Screen style={styles.screen}>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/iBikelogoto.png")}
        />
      </View>

      {/* login text */}
      <View style={{ width: "90%", marginTop: RFPercentage(10) }}>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.5),
          }}
        >
          Signup
        </Text>
      </View>

      {/* //email input */}
      <View style={{ marginTop: RFPercentage(3) }} />
      <View style={styles.emailmain}>
        <TextInput
          onChangeText={onChangeName}
          value={Name}
          placeholder="User Name or Email"
          placeholderTextColor={Colors.placeholder}
        />
      </View>

      {/* password */}
      <View style={{ marginTop: RFPercentage(2) }} />

      <View style={styles.emailmain}>
        <TextInput
          onChangeText={onChangePassword}
          value={Password}
          // value={Password}
          placeholder="Password"
          placeholderTextColor={Colors.placeholder}
          secureTextEntry={true && !eyeIcon}
        />
        <TouchableOpacity
          onPress={() => setEyeIcon(!eyeIcon)}
          activeOpacity={0.7}
          style={styles.eyeicon}
        >
          <MaterialCommunityIcons
            color={Colors.grey}
            style={{ right: RFPercentage(1) }}
            size={RFPercentage(3)}
            name={eyeIcon ? "eye-outline" : "eye-off-outline"}
          />
        </TouchableOpacity>
      </View>

      {/* confirm password */}
      <View style={{ marginTop: RFPercentage(2) }} />

      <View style={styles.emailmain}>
        <TextInput
          onChangeText={onChangeCpassword}
          value={Cpassword}
          placeholder="Confirm Password"
          placeholderTextColor={Colors.placeholder}
          secureTextEntry={true && !eyeIcon}
        />
        <TouchableOpacity
          onPress={() => setEyeIcon(!eyeIcon)}
          activeOpacity={0.7}
          style={styles.eyeicon}
        >
          <MaterialCommunityIcons
            color={Colors.grey}
            style={{ right: RFPercentage(1) }}
            size={RFPercentage(3)}
            name={eyeIcon ? "eye-outline" : "eye-off-outline"}
          />
        </TouchableOpacity>
      </View>

      {/* button */}
      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("OtpScreen");
        }}
      >
        <AppButton title="Signup" buttonColor={Colors.primary} />
      </TouchableOpacity>

      {/* Signup */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("LoginScreen");
        }}
        activeOpacity={0.7}
        style={{ position: "absolute", bottom: RFPercentage(5) }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(2.2),
          }}
        >
          If have a account ? Login
        </Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(10),
  },
  logo: {
    width: RFPercentage(21),
    height: RFPercentage(7.5),
  },

  eyeicon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: RFPercentage(1),
    width: RFPercentage(5),
    height: RFPercentage(5),
  },
  emailmain: {
    width: "90%",
    height: RFPercentage(7.5),
    backgroundColor: Colors.white,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.lightWhite,
    color: Colors.black,
    paddingLeft: RFPercentage(3),
    borderRadius: RFPercentage(1.5),
    justifyContent: "center",
  },
  input: { fontFamily: FontFamily.regular },

  error: {
    color: "#FF0000",
    fontSize: RFPercentage(1.3),
    marginTop: RFPercentage(0.5),
    fontFamily: FontFamily.regular,
  },

  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(3),
  },
});
