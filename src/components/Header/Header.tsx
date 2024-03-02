import React from "react";
import { View, Text, Pressable, Image } from "react-native";

import styles from "./Header.style";

interface HeaderProps {
  componentName: string;
  hasBackButton: boolean;
  navigation: any;
}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.backButtonWrapper}>
        {props.hasBackButton && (
          <Pressable
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../assets/back.png")}
            />
          </Pressable>
        )}
      </View>
      <Text style={styles.headerText}>{props.componentName}</Text>
    </View>
  );
}
