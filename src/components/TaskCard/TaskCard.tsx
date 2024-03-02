import React, { useState, useRef } from "react";
import {
  ScrollView,
  Text,
  View,
  NativeSyntheticEvent,
  Pressable,
} from "react-native";
import { NavigationPropsInterface, Task } from "../../constants/Interfaces";
import styles from "./TaskCard.style";
import { WIDTH } from "../../constants/Constans";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../../services/silcers/taskSlicer";
import { AppDispatch } from "../../services/store";

export function useSwipe(
  onSwipeLeft: any,
  onSwipeRight: any,
  rangeOffset: any
) {
  let firstTouch: number = 0;

  function onTouchStart(e: NativeSyntheticEvent<any>): void {
    firstTouch = e.nativeEvent.pageX;
  }

  function onTouchEnd(e: NativeSyntheticEvent<any>): void {
    const positionX: number = e.nativeEvent.pageX;
    const range: number = WIDTH / rangeOffset;

    if (positionX - firstTouch > range) {
      onSwipeRight && onSwipeRight(e);
    } else if (firstTouch - positionX > range) {
      onSwipeLeft && onSwipeLeft(e);
    }
  }

  return { onTouchStart, onTouchEnd };
}

const TaskCard = ({
  item,
  navigation,
}: {
  item: Task;
  navigation: any;
}): JSX.Element => {
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 30);
  const [sectionScrolled, setSectionScrolled] = useState<number>(-1);
  const ScrollRef = useRef<ScrollView>(null);
  const dispatch = useDispatch<AppDispatch>();

  function onSwipeLeft(): void {
    if (sectionScrolled === -1) {
      ScrollRef.current?.scrollTo({ x: 100, animated: true });
      setSectionScrolled(0);
    } else if (sectionScrolled === 0) {
      ScrollRef.current?.scrollTo({ x: 300, animated: true });
      setSectionScrolled(1);
    }
  }

  function onSwipeRight(): void {
    if (sectionScrolled === 1) {
      ScrollRef.current?.scrollTo({ x: 100, animated: true });
      setSectionScrolled(0);
    } else if (sectionScrolled === 0) {
      ScrollRef.current?.scrollTo({ x: 0, animated: true });
      setSectionScrolled(-1);
    }
  }

  return (
    <View style={styles.taskCardCointainer}>
      <ScrollView
        contentOffset={{ x: 100, y: 0 }}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        ref={ScrollRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={styles.taskCard}
      >
        <View style={{ flexDirection: "row", backgroundColor: "red" }}>
          <Pressable
            onPress={() => {
              ScrollRef.current?.scrollTo({ x: 100, animated: true });
              setSectionScrolled(0);
              dispatch(toggleComplete(item));
            }}
            style={[
              styles.sideButtons,
              {
                backgroundColor: !item.completed
                  ? "rgb(96,186,66)"
                  : "rgb(250,201,63)",
              },
            ]}
          >
            <Text style={styles.delete}>
              {!item.completed ? "Complete" : "TODO"}
            </Text>
          </Pressable>
          <View style={styles.taskCard}>
            <View
              style={{
                flex: 1,
                padding: 10,
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              {item?.description ? <Text>{item?.description}</Text> : null}
            </View>
          </View>
          <Pressable
            onPress={() => {
              ScrollRef.current?.scrollTo({ x: 100, animated: true });
              setSectionScrolled(0);
              navigation.navigate("EditTask", { task: item });
            }}
            style={styles.sideButtons}
          >
            <Text style={styles.edit}>Edit</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              ScrollRef.current?.scrollTo({ x: 100, animated: true });
              setSectionScrolled(0);
              dispatch(deleteTask(item));
            }}
            style={[styles.sideButtons, { backgroundColor: "rgb(235,86,69)" }]}
          >
            <Text style={styles.delete}>Delete</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default TaskCard;
