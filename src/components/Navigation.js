import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from 'styled-components';
import Icon from 'react-native-ionicons';

import NewsScreen from '../screens/NewsScreen';

const Tab = createBottomTabNavigator();

export default () => {
  const theme = useContext(ThemeContext);

  const tabBarOptions = {
    activeTintColor: theme.ACTIVE_TEXT_COLOR,
    inactiveTintColor: theme.INACTIVE_TEXT_COLOR,
    style: {
      backgroundColor: theme.SECONDARY_BACKGROUND_COLOR,
    },
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({color}) => {
      let iconName;

      switch (route.name) {
        case 'Science':
          iconName = 'flask-sharp';
          break;
        case 'Technology':
          iconName = 'code-slash-sharp';
          break;
      }

      return <Icon name={iconName} size={20} color={color} />;
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={tabBarOptions}
        screenOptions={screenOptions}>
        <Tab.Screen name="Science" component={NewsScreen} />
        <Tab.Screen name="Technology" component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
