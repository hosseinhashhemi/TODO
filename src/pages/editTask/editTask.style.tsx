import { StyleSheet } from "react-native";
import {
  mainContainersPadding,
  mainContainersPaddingTop,
} from "../../constants/Constans";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: mainContainersPadding,
    paddingTop: mainContainersPaddingTop,
  },
  titleTextInputStyle: {
    width: "100%",
    padding: 10,
    marginTop: 20,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 15,
  },
  desicriptionTextInputStyle: {
    width: "100%",
    marginTop: 10,
    padding: 10,
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 15,
  },
  addTaskText: {
    color: "white",
  },
});
