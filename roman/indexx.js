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
      inactiveBackgroundColor: '#B727FF',
      activeBackgroundColor:'#9900e6',
      style: {
        width: '100%',
        height: 50,
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
