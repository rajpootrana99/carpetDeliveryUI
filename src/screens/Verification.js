import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Colors } from "../contants";
import firebase from "../firebase";

const authURL = "http://carpet.spphotography.info/api/register";

const Verification = ({
  navigation,
  route: {
    params: { phoneNumber },
  },
}) => {
  global.bearerToken = "";

  const [confirm, setConfirm] = React.useState(null);
  const [code, setCode] = React.useState("");

  const { auth } = firebase();
  useEffect(() => {
    signInWithPhoneNumber();
  }, []);

  async function signInWithPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (e) {
      alert(JSON.stringify(e));
    }
  }

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      register();
    } catch (e) {
      alert("Wrong Pin");
    }
  };

  const register = async () => {
    await fetch(authURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((data) => (global.bearerToken = data.token));
    if (bearerToken != "") {
      navigation.navigate("HomeNav", { bearerToken });
    } else {
      Alert.alert("Alert", "No Token");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Login</Text>
      </View>
      <Text style={styles.textBold}>Enter Verification Code</Text>
      <Text style={styles.textLight}>
        We have sent you a 4 digit verification code on
      </Text>
      <Text style={styles.textNumber}>{phoneNumber}</Text>
      <OTPInputView
        style={{ width: "100%", height: 200, padding: 20 }}
        pinCount={6}
        code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={(text) => setCode(text)}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />

      {/* <TextInput value={code} onChangeText={(text) => setCode(text)} /> */}
      <TouchableOpacity
        style={styles.login}
        activeOpacity={0.8}
        onPress={
          () => confirmCode()
          // register
        }
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  headerTitle: {
    paddingLeft: 15,
    fontSize: 16,
    lineHeight: 20 * 1.4,
    width: 200,
  },
  textBold: {
    marginTop: 10,
    fontWeight: "700",
    fontSize: 24,
    textAlign: "center",
  },
  textLight: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 25,
    color: Colors.DEFAULT_LIGHT_GREY,
    textAlign: "center",
  },
  textNumber: {
    fontWeight: "700",
    marginVertical: 10,
    textAlign: "center",
  },
  otpContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    borderRadius: 5,
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  login: {
    marginTop: 20,
    width: 300,
    padding: 18,
    backgroundColor: Colors.DEFAULT_BLUE,
    borderRadius: 10,
    marginHorizontal: 30,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "700",
  },
  borderStyleBase: {
    width: 50,
    height: 50,
  },

  borderStyleHighLighted: {
    borderColor: "#000000",
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#000000",
  },
});

export default Verification;
