import { create } from "apisauce";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { globaStyles } from "../Styles/global";
import { statsStyle } from "../Styles/statsStyle";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const Comment = ({ navigation }) => {
  const courseCode = navigation.getParam("courseCode").toLowerCase();

  const [data, setData] = useState("");

  const [comment, setComment] = useState();

  const api = create({
    baseURL: "https://group13project.herokuapp.com/",
  });

  const addComment = () => {
    api
      .put("https://group13project.herokuapp.com/add/comment/com 311", {
        comment: comment,
      })
      .then((response) => response.status)
      .then((data) => {
        if (data != null) {
          setData(data);
        }
      });
  };

  // go back to sign in
  const toLogout = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={statsStyle.container}>
      <View>
        <Text style={globaStyles.h1}>
          PROVIDE FEEDBACK ON HOW THE EXAM WENT
        </Text>

        <Text style={styles.textSmall}>{courseCode}</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Type your feedback here.."
          placeholderTextColor="#644F4F"
          multiline={true}
          onChangeText={(comment) => setComment(comment)}
        />
      </View>

      {data.toString() == "201" ? (
        <AntDesign name="checkcircle" size={50} color="green" />
      ) : (
        <Text></Text>
      )}

      <View>
        <TouchableOpacity style={styles.signInBtn} onPress={addComment}>
          <Text style={styles.signInTxtInput}>Submit feedback</Text>
          <FontAwesome name="send-o" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={toLogout}>
          <Text style={statsStyle.out}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D9",
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    fontSize: 20,
    backgroundColor: "#8FBEC5",
    color: "#644F4F",
    paddingLeft: 6,
    width: wp(95),
    height: hp(20),
    marginBottom: 40,
  },

  inputView: {
    marginTop: 40,
    width: wp(100),
    alignItems: "center",

    // justifyContent: "center",
  },

  textSmall: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#644F4F",
    marginTop: 20,
  },

  signInBtn: {
    marginTop: 40,
    width: wp(60),
    fontSize: 10,
    borderRadius: 20,
    backgroundColor: "#8FBEC5",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 70,
    padding: 5,
    flexDirection: "row",
  },

  signInTxtInput: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#644F4F",
    padding: 6,
  },
});
