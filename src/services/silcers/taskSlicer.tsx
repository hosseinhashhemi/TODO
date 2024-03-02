import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "../../utils/uuid";
import { Task } from "../../constants/Interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await AsyncStorage.getItem("tasks");
  const data = response != null ? JSON.parse(response) : [];
  return data;
});

const deleteTask = createAsyncThunk("tasks/deleteTask", async (task: Task) => {
  const response = await AsyncStorage.getItem("tasks");
  const data = response != null ? JSON.parse(response) : [];
  const index = data.findIndex((t: Task) => t.id === task.id);
  if (index !== -1) {
    data.splice(index, 1);
  }
  await AsyncStorage.setItem("tasks", JSON.stringify(data));
  return data;
});

const toggleComplete = createAsyncThunk(
  "tasks/toggleComplete",
  async (task: Task) => {
    const response = await AsyncStorage.getItem("tasks");
    const data = response != null ? JSON.parse(response) : [];
    const index = data.findIndex((t: Task) => t.id === task.id);
    if (index !== -1) {
      data[index].completed = !data[index].completed;
    }
    await AsyncStorage.setItem("tasks", JSON.stringify(data));
    return data;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: [] as Task[],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(deleteTask.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(toggleComplete.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export { fetchTasks, createTask, toggleComplete, deleteTask, editTask };

export default taskSlice.reducer;
