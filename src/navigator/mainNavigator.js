import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import DetailsScreen from '../screens/details';
import LoginScreen from '../screens/login';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerTitleAlign: 'center', title: 'Employee List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
