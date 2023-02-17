import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"; // added

export const page2Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -100,
    width: wp(100), // added
    height: hp(100), // added
  },

  placeHolder: {
    color: "#644F4F",
    fontWeight: "bold",
  },

  selectedText: {
    color: "#237C98",
    fontWeight: "bold",
  },

  courseName: {
    marginTop: 30,
    color: "#644F4F",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    padding: 10,
  },

  courseCode: {
    marginTop: 15,
    color: "#644F4F",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },

  dropdown: {
    marginTop: 30,
    width: 350,
    height: 60,
    borderColor: "#237C98",
    borderWidth: 2.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginLeft: "auto",
    marginRight: "auto",
  },

  returnBtn: {
    backgroundColor: "#237C98",
    width: "100%",
  },

  returnBtnText: {
    color: "#D7D7D9",
    textAlign: "center",
    fontWeight: "bold",
    padding: 8,
  },

  icon: {
    marginRight: 5,
  },

  label: {},
});
