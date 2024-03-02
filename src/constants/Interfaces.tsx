import { NavigationProp } from "@react-navigation/native";

interface Task {
  id?: string;
  title: string;
  description: string;
  date?: string;
  completed?: boolean;
}

interface RootState {
  tasks: Task[];
}

type NavigationPropsInterface = {
  navigation: NavigationProp<any>;
};

export { RootState, Task, NavigationPropsInterface };
