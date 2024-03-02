import { StyleSheet } from "react-native";
import { WIDTH } from "../../constants/Constans";

export default StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 20,
    position: "absolute",
    zIndex: 1,
    width: WIDTH,
    top: 0,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  headerText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButtonWrapper: {
    height: 20,
    width: 20,
  },
});
