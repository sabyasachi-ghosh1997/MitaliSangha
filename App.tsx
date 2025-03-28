/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from './src/login';
import Registration from './src/registration';
import Login from './src/Login';
import Home from './src/Home';
import Dashboard from './src/Dashboard';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';

import UserList from './src/UserList';
import Schedule from './src/Schedule';
import MatchFixture from './src/MatchFixture';
import Pointable from './src/Pointable';
import Profile from './Profile';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'yellow',
        headerTitleStyle: {
          fontSize: 30,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{headerShown: false}}
      />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard} //DrawerNavigation
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PointTable"
        component={Pointable}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="UserList"
        component={UserList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MatchFixture"
        component={MatchFixture}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#2F4F4F',
          width: 240,
        },
        headerShown: false,
        drawerActiveBackgroundColor: '#6495ED',
        drawerActiveTintColor: 'red',
      }}>
      <Drawer.Screen
        name="Hii, Welcome"
        component={Dashboard}
        options={{
          drawerLabel: 'Hii, Welcome',
          drawerLabelStyle: {
            color: 'white',
            padding: 10,
            fontSize: 20,
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: 'Profile',
          drawerLabelStyle: {
            color: 'lightgreen',
            padding: 10,
            fontSize: 20,
          },
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Home}
        options={{
          drawerLabel: 'Logout',
          drawerLabelStyle: {
            color: 'red',
            padding: 10,
            fontSize: 20,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
export default App;
