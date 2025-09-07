import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Registration from '../screens/Registration';

const Stack = createNativeStackNavigator();

export default function AuthNavigator({setRole}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login">
        {props => <LoginScreen {...props} setRole={setRole} />}
      </Stack.Screen>
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}
