import { useEffect, useState } from "react";
import { RootState } from "../../constants/Interfaces";
import { Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../../services/silcers/taskSlicer";
import styles from "./editTask.style";
import Button from "../../components/Button";
import Header from "../../components/Header/Header";
import { AppDispatch } from "../../services/store";

export default function EditTask({ route, navigation }: any): JSX.Element {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [isErrorshown, setIsErrorShown] = useState<boolean>(false);

  const task = useSelector((state: RootState) =>
    state.tasks.find((task) => task.id === route.params.task.id)
  );

  useEffect(() => {
    if (task) {
      setTaskTitle(task.title);
      setTaskDescription(task.description);
    }
  }, [task]);

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
      <Header componentName="Edit Task" hasBackButton navigation={navigation} />
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
              editTask({
                ...task,
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
        <Text style={styles.addTaskText}>Edit task</Text>
      </Button>
    </View>
  );
}
