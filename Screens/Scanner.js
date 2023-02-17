import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { page3Styles } from "../Styles/Page3Styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { create } from "apisauce";

export default function App({ navigation }) {
  const courseCode = navigation.getParam("coursecode").toLowerCase();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [registrationNum, setRegNumber] = useState("SCAN QR CODE ON ID");

  let studentID =
    registrationNum.replace(/\//g, "-").toLowerCase() +
    "-" +
    courseCode.toLowerCase();

  // checking attendance
  const [data, setData] = useState([]); // added
  const [name, setName] = useState("");

  const [attended, setAttended] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    //make request to baseURL + '/hot'
    api
      .put(
        `https://group13project.herokuapp.com/student/edit/attended/${courseCode}/${studentID.toLowerCase()}`,
        { attended: true }
      )
      .then((response) => console.log(response));
  };

  const setSubmittedTrue = () => {
    //make request to baseURL + '/hot'
    api
      .put(
        `https://group13project.herokuapp.com/student/edit/submitted/${courseCode}/${studentID.toLowerCase()}`,
        { submitted: true }
      )
      .then((response) => console.log(response));
  };

  // automatically request camera permissions
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  //what happens when we scan the Qr code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setRegNumber(data);
    console.log("Type : " + type + "\nData : " + data);
  };

  // change name after clicking done
  const afterDoneClick = () => {
    setName(" ");
  };

  // checking permission sand returning to the screen
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // return the view
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>

      <Text style={page3Styles.text}>{registrationNum}</Text>

      {scanned && <Button title={"Confirm"} onPress={getName} />}

      <View style={styles.details}>
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
              setRegNumber("SCAN QR CODE ON ID");
            }
            {
              setSubmitted(false);
              setScanned(false);
            }
            {
              afterDoneClick();
            }
          }}
        >
          <Text style={page3Styles.doneText}>SCAN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D9",
    alignItems: "center",
    justifyContent: "center",
  },

  barcodebox: {
    marginTop: -20,
    alignItems: "center",
    // justifyContent : 'center',
    borderWidth: 5,
    marginBottom: 20,
    borderColor: "#237C98",
    height: 180,
    width: 200,
    overflow: "hidden",
    borderRadius: 30,
  },

  details: {
    marginTop: 20,
  },

  mainText: {
    fontSize: 16,
    margin: 20,
  },
});
