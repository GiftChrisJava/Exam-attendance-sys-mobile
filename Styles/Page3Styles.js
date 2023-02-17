import { StyleSheet } from "react-native";

export const page3Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D9",
    alignItems: "center",
    // justifyContent : 'center',
    marginTop: 0,
  },

  headings: {
    marginTop: -10,
  },

  notFound: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
    color: "red",
    marginBottom: -20,
  },

  text: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#644F4F",
    padding: 10,
  },

  textSmall: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#237C98",
  },

  textVerySmall: {
    fontWeight: "bold",
    fontSize: 15,
    color: "rgb(219, 112, 12)",
    textAlign: "center",
    padding: 5,
  },

  textVerySmallName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#237C98",
    textAlign: "center",
    padding: 1,
    marginBottom: 15,
  },

  // increased marginlert
  qrIcon: {
    marginLeft: 40,
    paddingTop: 5,
    color: "#237C98",
  },

  scanQrText: {
    fontWeight: "bold",
    color: "#644F4F",
    fontWeight: "bold",
    fontSize: 17,
  },

  ScanIcon: {
    marginLeft: 20,
    color: "#644F4F",
    fontWeight: "bold",
  },

  scanner: {
    flexDirection: "row",
    backgroundColor: "#8FBEC5",
    padding: 6,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: -220,
  },

  textInput: {
    fontSize: 18,
    color: "rgb(219, 112, 12)",
    padding: 5,
  },

  searchBar: {
    marginTop: 20,
    width: 350,
    height: 50,
    borderColor: "#237C98",
    borderWidth: 2.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
  },

  search: {
    // marginTop : 20,
    backgroundColor: "#8FBEC5",
    padding: 5,
    width: 100,
    textAlign: "center",
    fontWeight: "bold",
    color: "#644F4F",
    fontSize: 17,
    borderRadius: 15,
    marginLeft: -170,
    marginBottom: 10,
  },

  details: {
    marginBottom: 10,
  },

  firstAttended: {
    marginTop: 15,
    flexDirection: "row",
    padding: 7,
  },

  attended: {
    marginTop: 2,
    backgroundColor: "#8FBEC5",
    padding: 10,
    width: 150,
    textAlign: "center",
    fontWeight: "bold",
    color: "#644F4F",
    fontSize: 17,
    borderRadius: 20,
    marginRight: 50,
    borderColor: "644F4F",
    borderWidth: 1.5,
  },

  // changed margin top
  done: {
    marginTop: 50,
    width: 120,
    borderRadius: 10,
    backgroundColor: "#644F4F",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 40,
    padding: 8,
  },

  doneText: {
    // marginTop: "50%",
    color: "#D7D7D9",
    fontWeight: "bold",
  },

  final: {
    marginTop: 20,
    flexDirection: "row",
  },
});
