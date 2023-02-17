import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { page3Styles } from "../Styles/Page3Styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { create } from "apisauce";

import { FontAwesome5 } from "@expo/vector-icons";

const PageThree = ({ navigation }) => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const courseCode = navigation.getParam("courseCode").toLowerCase();

  const studentID =
    registrationNumber.replace(/\//g, "-") + "-" + courseCode.toLowerCase();

  const [data, setData] = useState([]);
  let [name, setName] = useState("");

  const [attended, setAttended] = useState(false); // changed
  const [submitted, setSubmitted] = useState(false); // changed

  // to scanner screen
  const toScannerScreen = () => {
    // set attended and scanned to false
    setAttended(false);
    setSubmitted(false);

    navigation.navigate("Scanner", {
      coursecode: courseCode,
    });
  };

  //The baseURL will be our starting point.
  const api = create({
    baseURL: "https://group13project.herokuapp.com/",
  });

  const getName = () => {
    api
      .get(
        `https://group13project.herokuapp.com/get/student/${studentID.toLowerCase()}`
      )
      .then((response) => response.data)
      .then((data) => {
        if (data != null) {
          setData(data);
          setName(data.name);
          setAttended(data.attended);
          setSubmitted(data.submitted);
        } else {
          setName("NOT FOUND");
        }
      });
  };

  const setAttendedTrue = () => {
    //make request to baseURL
    api
      .put(
        `https://group13project.herokuapp.com/student/edit/attended/${courseCode}/${studentID.toLowerCase()}`,
        { attended: true }
      )
      .then((response) => console.log(response));
  };

  const setSubmittedTrue = () => {
    //make request to baseURL
    api
      .put(
        `https://group13project.herokuapp.com/student/edit/submitted/${courseCode}/${studentID.toLowerCase()}`,
        { submitted: true }
      )
      .then((response) => console.log(response));
  };

  // change name after clicking done
  const afterDoneClick = () => {
    setName(" ");
  };
  return (
    <View style={page3Styles.container}>
      <View style={page3Styles.headings}>
        <Text style={page3Styles.text}>{navigation.getParam("name")}</Text>
        <Text style={page3Styles.textSmall}>
          {navigation.getParam("courseCode")}
        </Text>
        <Text style={page3Styles.textVerySmall}>
          {" "}
          Type Registration number in the search bar or click the QR code to
          Scan ID{" "}
        </Text>
      </View>

      <View style={page3Styles.searchBar}>
        <TextInput
          style={page3Styles.textInput}
          placeholder="Reg.Number eg Bed/com/09/21"
          onChangeText={(registrationNumber) =>
            setRegistrationNumber(registrationNumber)
          }
        />

        <TouchableOpacity
          onPress={() => {
            getName();
          }}
        >
          <FontAwesome5
            style={page3Styles.qrIcon}
            name="search"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={toScannerScreen} style={page3Styles.scanner}>
        <Text style={page3Styles.scanQrText}>SCAN QR</Text>
        <AntDesign name="scan1" size={24} style={page3Styles.ScanIcon} />
      </TouchableOpacity>

      <View style={page3Styles.details}>
        <Text style={page3Styles.text}>
          {navigation.getParam("registrationNumber")}
        </Text>
        <Text style={page3Styles.textVerySmallName}>{name}</Text>
      </View>

      <View style={page3Styles.firstAttended}>
        <TouchableOpacity
          onPress={() => {
            setAttended(true);
            setAttendedTrue();
          }}
        >
          <Text style={page3Styles.attended}>ATTENDED ? </Text>
        </TouchableOpacity>

        {attended ? (
          <AntDesign name="checkcircle" size={50} color="green" />
        ) : (
          <MaterialIcons name="cancel" size={50} color="#644F4F" />
        )}
      </View>

      <View style={page3Styles.firstAttended}>
        <TouchableOpacity>
          {attended ? (
            <Text
              style={page3Styles.attended}
              onPress={() => {
                setSubmitted(true);
                setSubmittedTrue();
              }}
            >
              SUBMITTED ?{" "}
            </Text>
          ) : (
            <Text
              style={page3Styles.attended}
              onPress={() => {
                setSubmitted(false);
              }}
            >
              SUBMITTED ?{" "}
            </Text>
          )}
        </TouchableOpacity>

        {submitted && attended ? (
          <AntDesign name="checkcircle" size={50} color="green" />
        ) : (
          <MaterialIcons name="cancel" size={50} color="#644F4F" />
        )}
      </View>

      <View style={page3Styles.final}>
        <TouchableOpacity
          style={page3Styles.done}
          onPress={() => {
            {
              setAttended(false);
            }
            {
              setSubmitted(false);
            }
            {
              afterDoneClick();
            }
          }}
        >
          <Text style={page3Styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PageThree;
