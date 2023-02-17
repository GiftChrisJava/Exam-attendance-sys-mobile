import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "../Screens/SignIn";
import Scanner from "../Screens/Scanner";
import SelectCourse from "../Screens/Page2";
import Scanning from "../Screens/PageThree";
import { ExamStats } from "../Screens/ExamStats";
import { ViewAttended } from "../Screens/ViewAttended";
import { ViewNeverAttended } from "../Screens/ViewNeverAttended";
import { ViewNotSubmitted } from "../Screens/ViewNotSubmitted";
import { Comment } from "../Screens/Comment";

const screens = {
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "",
    },
  },

  SelectCourse: {
    screen: SelectCourse,
    navigationOptions: {
      title: "",
    },
  },

  ExamStats: {
    screen: ExamStats,
    navigationOptions: {
      title: "",
    },
  },

  Comment: {
    screen: Comment,
    navigationOptions: {
      title: "",
    },
  },

  ViewAttended: {
    screen: ViewAttended,
    navigationOptions: {
      title: " ",
    },
  },

  ViewNotSubmitted: {
    screen: ViewNotSubmitted,
    navigationOptions: {
      title: "",
    },
  },

  ViewNeverAttended: {
    screen: ViewNeverAttended,
    navigationOptions: {
      title: "",
    },
  },

  Scanning: {
    screen: Scanning,
    navigationOptions: {
      title: "",
    },
  },

  Scanner: {
    screen: Scanner,
    navigationOptions: {
      title: " ",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#D7D7D9",
      height: 60,
    },
  },
});

// returns a component we can render to app.js
export default createAppContainer(HomeStack);
