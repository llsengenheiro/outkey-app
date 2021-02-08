import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SignIn from './src/pages/SingIn';
import Home from './src/pages/Home';


export default function Routes() {

  return (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
