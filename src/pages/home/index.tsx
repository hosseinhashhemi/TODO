import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  Task,
  NavigationPropsInterface,
} from "../../constants/Interfaces";
import styles from "./home.style";
import Button from "../../components/Button";
import Header from "../../components/Header/Header";
import { WIDTH } from "../../constants/Constans";
import TaskCard from "../../components/TaskCard/TaskCard";
import { fetchTasks } from "../../services/silcers/taskSlicer";
import { AppDispatch } from "../../services/store";

export default function Home({
  navigation,
}: NavigationPropsInterface): JSX.Element {
  const tasks: Task[] = useSelector((state: RootState) => {
    console.log(state, "state");
    return state.tasks;
  });
  const dispatch = useDispatch<AppDispatch>();
  // i want to fetch tasks

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <View style={styles.container}>
      <Header
        componentName="Home"
        hasBackButton={false}
        navigation={navigation}
      />

      {!tasks?.length || tasks?.length === 0 ? (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.noTaskText}>Here is no task to see!</Text>
          <Text style={styles.noTaskDescriptionText}>
            Please add a Task to see and manage it
          </Text>
        </View>
      ) : (
        <FlatList
          bounces={false}
          data={["", ...tasks, ""]}
          style={styles.flatListStyle}
          renderItem={({ item }) => {
            return item === "" ? (
              <View style={{ height: 10 }} />
            ) : (
              <TaskCard navigation={navigation} item={item as Task} />
            );
          }}
        />
      )}
      <Button
        extraStyle={{
          position: "absolute",
          bottom: 10,
          width: WIDTH - 40,
        }}
        onPress={() => {
          navigation.navigate("AddTask");
        }}
      >
        <Text style={styles.addTaskText}>Add new task</Text>
      </Button>
    </View>
  );
}
