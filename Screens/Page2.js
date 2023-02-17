import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { globaStyles } from "../Styles/global";
import { page2Styles } from "../Styles/page2Styles";
import { create } from "apisauce";

const Page2 = ({ navigation }) => {
  // extract the course code
  let username = navigation.getParam("Username");
  let adminName = navigation.getParam("adminName");
  let courseCode = username.slice(5);

  const [data, setData] = useState([]);
  const [courseName, setCorseName] = useState("");

  //The baseURL will be our starting point.
  const api = create({
    baseURL: "https://group13project.herokuapp.com/",
  });

  // automatically get a course name
  useEffect(() => {
    const getCourseName = async () => {
      //get a course using coursecode
      api
        .get(`https://group13project.herokuapp.com/get/course/${courseCode}`)
        .then((response) => response.data)
        .then((data) => {
          if (data != null) {
            setData(data);
            setCorseName(data.courseName);
          } else {
            setCorseName("NOT FOUND");
          }
        });
    };

    getCourseName();
  }, []);

  // go to Scren 3
  const toNextScreen = () => {
    navigation.navigate("Scanning", {
      name: courseName,
      courseCode: courseCode,
    });
  };

  const toViewStatistics = () => {
    navigation.navigate("ExamStats", {
      name: courseName,
      courseCode: courseCode,
    });
  };

  return (
    <View style={page2Styles.container}>
      <Image style={globaStyles.logo} source={require("../assets/att2.png")} />
      <Text style={globaStyles.h1}>EXAM ATTENDANCE SYSTEM</Text>

      <Text style={styles.textSmall}>{adminName}</Text>

      <Text style={page2Styles.courseName}>{courseName}</Text>

      <Text style={page2Styles.courseCode}>{courseCode.toUpperCase()}</Text>

      <TouchableOpacity style={globaStyles.signInBtn} onPress={toNextScreen}>
        <Text style={globaStyles.signInTxtInput}>START ATTENDANCE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globaStyles.signInBtn}
        onPress={toViewStatistics}
      >
        <Text style={globaStyles.signInTxtInput}>VIEW STATISTICS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  textSmall: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    // color: "#644F4F",
    color: "#237C98",
  },
});
