import { StyleSheet } from "react-native";
import { mainContainersPaddingTop } from "../../constants/Constans";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: mainContainersPaddingTop,
  },
  addTaskText: {
    color: "white",
  },
  noTaskText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  noTaskDescriptionText: {
    color: "black",
    fontSize: 15,
    fontWeight: "normal",
  },
  flatListStyle: {
    width: "100%",
  },
});
