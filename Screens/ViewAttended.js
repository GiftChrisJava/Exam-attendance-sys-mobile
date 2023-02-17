import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { statsStyle } from "../Styles/statsStyle";

export const ViewAttended = ({ navigation }) => {
  const data = navigation.getParam("attendedSubmitted");
  const courseCode = navigation.getParam("courseCode");

  // go back to sign in
  const toLogout = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={statsStyle.container}>
      <Text style={statsStyle.textSmall}>{courseCode}</Text>

      <View>
        <Text style={statsStyle.attendedSubmitted}>
          STUDENTS WHO ATTENDED AND SUBMITTED THE PAPER
        </Text>
      </View>

      <View style={statsStyle.bgAttendedSubmitted}>
        <ScrollView>
          {data.map((student) => (
            <View style={statsStyle.innerDisplay}>
              <Text key={student.id} style={statsStyle.name}>
                {student.name}
              </Text>
              <Text style={statsStyle.name_regNumber}>{student.regNumber}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View>
        <TouchableOpacity onPress={toLogout}>
          <Text style={statsStyle.out}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
