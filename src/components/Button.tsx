import { Pressable, StyleSheet } from "react-native";
import { buttonHeight, mainColor } from "../constants/Constans";

interface Props {
  onPress: () => void;
  children: React.ReactNode;
  extraStyle?: object;
}

export default function Button({ onPress, children, extraStyle }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        [
          styles.button,
          extraStyle,
          {
            opacity: pressed ? 0.7 : 1,
          },
        ],
      ]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: buttonHeight,
    backgroundColor: mainColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
