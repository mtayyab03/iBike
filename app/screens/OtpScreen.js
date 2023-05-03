import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import MainHeader from "../components/MainHeader";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
export default function OtpScreen(props) {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleOTPChange = (index, value) => {
    if (value.length === 0 || /^[0-9]+$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (value.length === 1 && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    // handle OTP verification logic here
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: RFPercentage(4),
          position: "absolute",
          top: RFPercentage(8),
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("LoginScreen");
          }}
          activeOpacity={0.7}
          style={{ position: "absolute", left: 0 }}
        >
          <Image
            style={{
              width: RFPercentage(3),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/logoback.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: RFPercentage(3),
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
          }}
        >
          Back
        </Text>
      </View>
      <Text style={styles.title}>Verification Code</Text>
      <Text
        style={{
          width: "90%",
          fontSize: RFPercentage(2),
          fontFamily: FontFamily.regular,
          marginBottom: 20,
        }}
      >
        Enter your verification code that we sent you through your email or
        phone number.
      </Text>
      <View style={styles.otpContainer}>
        {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={otp[index]}
            onChangeText={(text) => handleOTPChange(index, text)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputRefs.current[index] = ref)}
            onSubmitEditing={() => {
              if (index < 3) {
                inputRefs.current[index + 1].focus();
              }
            }}
            returnKeyType={index === 3 ? "done" : "next"}
          />
        ))}
      </View>

      {/* button */}
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Verify OTP" buttonColor={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    width: "90%",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.primary,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  otpInput: {
    width: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(3),
  },
});
