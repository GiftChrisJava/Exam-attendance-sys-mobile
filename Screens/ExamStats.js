import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globaStyles } from "../Styles/global";
import { create } from "apisauce";
import { page3Styles } from "../Styles/Page3Styles";

export const ExamStats = ({ navigation }) => {
  const courseCode = navigation.getParam("courseCode").toLowerCase();

  // list of students who attended and submitted their papers
  const [attendedSubmitted, setAttendedSubmitted] = useState([]);

  // append 0 ti a single digit number
  let numberOfAttendedAndSubmitted = attendedSubmitted.length;
  let formatedNumberOfAttendedAndSubmitted = (
    "0" + numberOfAttendedAndSubmitted
  ).slice(-2);

  // list of students who attended but never managed to submit the paper
  const [didNotSubmit, setDidNotSubmit] = useState([]);

  // append 0 to a single digit number
  let numberOfStudentsDidNotSubmit = didNotSubmit.length;
  let formatedNumberOfStudentsDidNotSubmit = (
    "0" + numberOfStudentsDidNotSubmit
  ).slice(-2);

  // list of students who never attended the exam
  const [neverAttended, setNeverAttended] = useState([]);

  // append 0 to a single digit number
  let numberOfStudentsNeverAttended = neverAttended.length;
  let formatedNumberOfStudentsNeverAttended = (
    "0" + numberOfStudentsNeverAttended
  ).slice(-2);

  const api = create({
    baseURL: "https://group13project.herokuapp.com/",
  });

  // automatically get a course name
  useEffect(() => {
    // get students who attended and submitted their papers
    const getThoseAttendedAndSubmitted = () => {
      api
        .get(
          `https://group13project.herokuapp.com/get/course/attended/submitted/${courseCode}`
        )
        .then((response) => response.data)
        .then((data) => {
          setAttendedSubmitted(data.studentList);
        });
    };

    // get students who attended and submitted their papers
    const getThoseDitNotAttendAndSubmit = () => {
      api
        .get(
          `https://group13project.herokuapp.com/get/course/NOT/attended/submitted/${courseCode}`
        )
        .then((response) => response.data)
        .then((data) => {
          setNeverAttended(data.studentList);
        });
    };

    // get students who failed to submit their papers
    const getThoseNeverSubmitted = () => {
      api
        .get(
          `https://group13project.herokuapp.com/get/students/NOT/submitted/${courseCode}`
        )
        .then((response) => response.data)
        .then((data) => {
          setDidNotSubmit(data.studentList);
        });
    };

    getThoseAttendedAndSubmitted();
    getThoseDitNotAttendAndSubmit();
    getThoseNeverSubmitted();
  }, []);

  // see students who attended and submitted their papers
  const seeStudentsAttendedAndSubmitted = () => {
    navigation.navigate("ViewAttended", {
      courseCode: courseCode,
      attendedSubmitted: attendedSubmitted,
    });
  };

  // students who did not manage to submit their paper
  const seeStudentsDidNotSubmit = () => {
    navigation.navigate("ViewNotSubmitted", {
      courseCode: courseCode,
      didNotSubmit: didNotSubmit,
    });
  };

  // students who did not attend the exam
  const seeStudentsNeverCameForExam = () => {
    navigation.navigate("ViewNeverAttended", {
      courseCode: courseCode,
      neverAttended: neverAttended,
    });
  };

  const goToComment = () => {
    navigation.navigate("Comment", {
      courseCode: courseCode,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={globaStyles.h1}>ATTENDANCE STATISTICS</Text>
        <Text style={styles.textSmall}>{courseCode}</Text>
        <Text style={page3Styles.textVerySmall}>
          {" "}
          "CLICK ON THE NUMBERS BELOW TO VIEW A LIST OF STUDENTS"{" "}
        </Text>
      </View>

      <TouchableOpacity onPress={seeStudentsAttendedAndSubmitted}>
        <View style={styles.statsCover}>
          <Text style={styles.num}>{formatedNumberOfAttendedAndSubmitted}</Text>
          <Text style={styles.attendedSubmitted}>ATTENDED & SUBMITTED</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={seeStudentsDidNotSubmit}>
        <View style={styles.statsCover}>
          <Text style={styles.num}>{formatedNumberOfStudentsDidNotSubmit}</Text>
          <Text style={styles.neverSubmitted}>DID NOT SUBMIT</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={seeStudentsNeverCameForExam}>
        <View style={styles.statsCover}>
          <Text style={styles.num}>
            {formatedNumberOfStudentsNeverAttended}
          </Text>
          <Text style={styles.notSubmitted}>NEVER ATTENDED THE EXAM</Text>
        </View>
      </TouchableOpacity>

      <View>
        <TouchableOpacity style={globaStyles.signInBtn} onPress={goToComment}>
          <Text style={globaStyles.signInTxtInput}>Add exam comment</Text>
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
    // justifyContent : 'center',
    marginTop: -15,
  },

  touchableOpacityCover: {
    alignItems: "center",
    justifyContent: "center",
  },

  textSmall: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#644F4F",
    // color: "#237C98",
  },

  num: {
    fontWeight: "bold",
    color: "#ffff",
    fontSize: 40,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: "center",
    backgroundColor: "#237C98",
    borderRadius: 100,
  },

  statsCover: {
    marginTop: 30,
    alignItems: "center",
  },

  attendedSubmitted: {
    marginTop: 10,
    color: "#2C9750",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },

  neverSubmitted: {
    marginTop: 10,
    color: "#644F4F",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },

  notSubmitted: {
    marginTop: 10,
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },

  view: {
    marginTop: 10,
    backgroundColor: "#8FBEC5",
    padding: 4,
    width: 130,
    textAlign: "center",
    fontWeight: "bold",
    color: "#644F4F",
    fontSize: 17,
    borderRadius: 20,
    borderColor: "644F4F",
    borderWidth: 1.5,
  },

  out: {
    marginTop: 1,
    backgroundColor: "#8FBEC5",
    padding: 4,
    width: 130,
    textAlign: "center",
    fontWeight: "bold",
    color: "#644F4F",
    fontSize: 17,
    borderRadius: 20,
    borderColor: "644F4F",
    borderWidth: 1.5,
  },

  innerDisplay: {
    flexDirection: "row",
    textAlign: "center",
    padding: 10,
    justifyContent: "space-between",
  },

  bgAttendedSubmitted: {
    marginTop: 18,
    height: 160,
    backgroundColor: "#8FBEC5",
    marginBottom: 18,
    width: "90%",
  },

  name: {
    fontWeight: "bold",
    color: "#644F4F",
    fontSize: 16,
    marginRight: 10,
  },
  name_regNumber: {
    fontWeight: "bold",
    color: "#237C98",
    fontSize: 16,
    marginRight: 10,
  },
});
