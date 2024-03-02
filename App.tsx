import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./src/services/store";

import Home from "./src/pages/home";
import AddTask from "./src/pages/addTask";
import EditTask from "./src/pages/editTask";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="AddTask"
              component={AddTask}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="EditTask"
              component={EditTask}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}
