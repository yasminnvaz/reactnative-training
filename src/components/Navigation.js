import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from 'styled-components';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGlobeAmericas, faDna} from '@fortawesome/free-solid-svg-icons';

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
      switch (route.name) {
        case 'Science & Technology':
          return <FontAwesomeIcon icon={faDna} size={20} color={color} />;

        case 'World':
          return (
            <FontAwesomeIcon icon={faGlobeAmericas} size={20} color={color} />
          );
      }
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={tabBarOptions}
        screenOptions={screenOptions}>
        <Tab.Screen name="Science & Technology" component={NewsScreen} />
        <Tab.Screen name="World" component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
