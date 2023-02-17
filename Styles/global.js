import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const globaStyles = StyleSheet.create({
  window: {
    backgroundColor: "#D7D7D9",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: wp(100), // added
    height: hp(100), // added
  },

  text: {
    color: "#644F4F",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },

  firstView: {
    marginBottom: 50,
  },

  h1: {
    marginTop: "1%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#237C98",
    padding: 10,
  },

  logo: {
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
    width: wp(40), // added
    height: hp(20), // added
    justifyContent: "center",
  },

  inputView: {
    marginTop: 10,
    width: wp(100), // added
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 30,
    backgroundColor: "#8FBEC5",
    color: "#644F4F",
    paddingLeft: 12,
    width: wp(80), //added
    height: hp(7), // added
    marginBottom: 40,
    alignItems: "center",
  },

  signInBtn: {
    marginTop: 60,
    width: wp(60), // added
    borderRadius: 20,
    backgroundColor: "#8FBEC5",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 5,
  },

  signInTxtInput: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#644F4F",
    padding: 6,
  },
});
