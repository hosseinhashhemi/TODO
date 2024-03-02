import { useEffect, useState } from "react";
import { NavigationPropsInterface } from "../../constants/Interfaces";
import { Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { createTask } from "../../services/silcers/taskSlicer";
import styles from "./addTask.style";
import Button from "../../components/Button";
import Header from "../../components/Header/Header";
import { AppDispatch } from "../../services/store";
export default function AddTask({
  navigation,
}: NavigationPropsInterface): JSX.Element {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [isErrorshown, setIsErrorShown] = useState<boolean>(false);

  useEffect(() => {
    if (isErrorshown) {
      setTimeout(() => {
        setIsErrorShown(false);
      }, 3000);
    }
  }, [isErrorshown]);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <Header componentName="Add Task" hasBackButton navigation={navigation} />
      <TextInput
        placeholder="Enter your task title"
        style={[
          styles.titleTextInputStyle,
          { borderColor: isErrorshown ? "rgb(255, 0, 30)" : "gray" },
        ]}
        value={taskTitle}
        onChangeText={(text) => {
          setTaskTitle(text);
        }}
      />
      <TextInput
        placeholder="Enter your task description"
        style={styles.desicriptionTextInputStyle}
        value={taskDescription}
        defaultValue={taskTitle}
        multiline={true}
        textAlignVertical="top"
        onChangeText={(text) => {
          setTaskDescription(text);
        }}
      />
      <Button
        extraStyle={{
          position: "absolute",
          bottom: 10,
        }}
        onPress={() => {
          if (taskTitle.length > 0) {
            dispatch(
              createTask({
                title: taskTitle,
                description: taskDescription,
              })
            );
            navigation.goBack();
          } else if (isErrorshown === false) {
            setIsErrorShown(true);
          }
        }}
      >
        <Text style={styles.addTaskText}>Add task</Text>
      </Button>
    </View>
  );
}
