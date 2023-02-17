import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { statsStyle } from "../Styles/statsStyle";

export const ViewNotSubmitted = ({ navigation }) => {
  const data = navigation.getParam("didNotSubmit");
  const courseCode = navigation.getParam("courseCode");

  // go back to sign in
  const toLogout = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={statsStyle.container}>
      <Text style={statsStyle.textSmall}>{courseCode}</Text>

      <View>
        <Text style={statsStyle.neverSubmitted}>
          STUDENTS WHO DID NOT MANAGE TO SUBMIT THE PAPER
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
