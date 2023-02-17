import { StyleSheet } from "react-native";

export const statsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D9",
    alignItems: "center",
    // justifyContent : 'center',
    marginTop: 0,
  },

  textSmall: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#237C98",
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

  attendedSubmitted: {
    marginTop: 10,
    color: "#2C9750",
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
    height: "70%",
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
