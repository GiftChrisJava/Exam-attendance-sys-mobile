import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { globaStyles } from "../Styles/global";
import { page3Styles } from "../Styles/Page3Styles";

import { create } from "apisauce"; //added

const SignIn = ({ navigation }) => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [adminName, setAdminName] = useState("");
  const [data, setData] = useState({});
  let [count, setCount] = useState(0);
  const [feedbackSignal, setFeedbackSignal] = useState("1");

  let goIn = false;

  //The baseURL will be our starting point.
  const api = create({
    baseURL: "https://group13project.herokuapp.com/",
  });

  const signInUser = () => {
    setCount(count++); // increment count
    api
      .post("https://group13project.herokuapp.com/signIn", {
        userName: Username,
        password: Password,
      })
      .then((response) => response.data)
      .then((data) => {
        if (data != null) {
          setData(data);
          setAdminName(data.fullName);
        }
      });
  };

  const move = () => {
    console.log(data);

    if (data.userName === Username && data.password === Password) {
      goIn = data.userName === Username && data.password === Password;
      if (goIn) {
        setFeedbackSignal("1");

        navigation.navigate("SelectCourse", {
          Username: data.userName,
          adminName: adminName,
        });

        setFeedbackSignal("1");
      }
    } else {
      if (count > 2) {
        setFeedbackSignal("0");
      }
    }
  };

  const onPressHandler = () => {
    signInUser();
    move();
  };

  return (
    <View style={globaStyles.window}>
      <ScrollView style={globaStyles.scrol}>
        <View style={globaStyles.firstView}>
          <StatusBar style="auto" />
          <Image
            style={globaStyles.logo}
            source={require("../assets/att2.png")}
          />
          <Text style={globaStyles.h1}>EXAM ATTENDANCE SYSTEM</Text>
        </View>

        <View style={globaStyles.inputView}>
          <TextInput
            style={globaStyles.TextInput}
            placeholder="Username "
            placeholderTextColor="#644F4F"
            onChangeText={(Username) => setUsername(Username)}
          />
        </View>

        <View style={globaStyles.inputView}>
          <TextInput
            style={globaStyles.TextInput}
            placeholder="Password "
            placeholderTextColor="#644F4F"
            secureTextEntry={true}
            onChangeText={(Password) => setPassword(Password)}
          />
        </View>

        {feedbackSignal === "0" ? (
          <Text style={page3Styles.notFound}>
            Access Denied!! Incorrect credintials
          </Text>
        ) : (
          ""
        )}

        <TouchableOpacity
          style={globaStyles.signInBtn}
          onPress={onPressHandler}
        >
          <Text style={globaStyles.signInTxtInput}>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignIn;
