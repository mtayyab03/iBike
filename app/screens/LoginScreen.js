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

  let validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password"),
  });
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
          Login
        </Text>
      </View>

      {/* //email input */}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => {
          props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.inputmaincontainer}>
              <View style={styles.emailmain}>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  // value={text}
                  placeholder="User Name or Email"
                  placeholderTextColor={Colors.placeholder}
                />
              </View>
              <View style={{ width: "90%" }}>
                {touched.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.passwordmain}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
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
              <View style={{ width: "90%" }}>
                {touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
              </View>
            </View>

            <TouchableOpacity
              style={styles.loginbutton}
              activeOpacity={0.7}
              onPress={handleSubmit}
            >
              <AppButton title="Login" buttonColor={Colors.primary} />
            </TouchableOpacity>
          </>
        )}
      </Formik>

      {/* authetication by google apple fb */}

      <View style={styles.socialmain}>
        <View style={styles.appfbgcontainer}>
          <Image
            style={styles.fbglogo}
            source={require("../../assets/images/fblogo.png")}
          />
        </View>
        <View style={styles.appfbgcontainer}>
          <Image
            style={styles.fbglogo}
            source={require("../../assets/images/glogo.png")}
          />
        </View>
        <View style={styles.appfbgcontainer}>
          <Image
            style={styles.applelogo}
            source={require("../../assets/images/applelogo.png")}
          />
        </View>
      </View>

      {/* Signup */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("SignUpScreen");
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
          Don’t have a account ? SIGN UP
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
  inputmaincontainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(2),
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

  passwordmain: {
    width: "90%",
    height: RFPercentage(7.5),
    backgroundColor: Colors.white,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.lightWhite,
    color: Colors.black,
    paddingLeft: RFPercentage(3),
    borderRadius: RFPercentage(1.5),
    justifyContent: "center",
    marginTop: RFPercentage(2),
  },
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
  appfbgcontainer: {
    width: RFPercentage(15),
    height: RFPercentage(8),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.lightWhite,
    borderRadius: RFPercentage(2),
  },
  socialmain: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: RFPercentage(5),
  },
  fbglogo: {
    width: RFPercentage(4),
    height: RFPercentage(4),
  },
  applelogo: {
    width: RFPercentage(3.2),
    height: RFPercentage(4),
  },
});
