import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from './pages/main';
import SignInScreen from './pages/login';

const AuthStack = createStackNavigator({
  Sign: { screen: SignInScreen },
});

const MainNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName:'Main',
    tabBarOptions:{
      showIcon: true,
      showLabel: false,
      style: {
        width: '100%',
        height: 1,
      },
    },
  },
);

export default createAppContainer(createSwitchNavigator(
  {
    MainNavigator,
    AuthStack
  },
  {
    initialRouteName: 'AuthStack',
  },
),
);
