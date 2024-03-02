import { StyleSheet } from "react-native";
import { WIDTH } from "../../constants/Constans";

export default StyleSheet.create({
  taskCardCointainer: {
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 5,
    marginTop: 5,
  },
  taskCard: {
    width: WIDTH - 40,
    backgroundColor: "#fff",
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  edit: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  delete: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  sideButtons: {
    width: 100,
    backgroundColor: "rgb(170,170,170)",
    alignItems: "center",
    justifyContent: "center",
  },
});
