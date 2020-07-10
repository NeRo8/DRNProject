import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Auth from '../screens/Auth/Auth';
import RestorePassword from '../screens/Auth/RestorePassword';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';

const Stack = createStackNavigator();

export default function AuthStack() {
  const theme = useSelector(state => state.theme);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerTitle: 'Authorization',
          headerStyle: {
            backgroundColor: theme.$headerBackground,
          },
        }}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="RestorePassword" component={RestorePassword} />
    </Stack.Navigator>
  );
}
