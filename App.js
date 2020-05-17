import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens//ReadScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Write: { screen: WriteScreen },
    Read: { screen: ReadScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ }) => {
        const routeName = navigation.state.routeName
        if (routeName === 'Write') {
          return (
            <Image
              source={require('./assets/writer_logo.png')}
              style={{ width: 40, height: 40 }} />
          )
        }
        else if (routeName === 'Read') {
          return (
            <Image
              source={require('./assets/reader_logo.png')}
              style={{ width: 40, height: 40 }} />
          )
        }
      }
    })
  }

);
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    justifyContent: 'center',
  },
});
