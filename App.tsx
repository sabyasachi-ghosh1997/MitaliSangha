import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './Navigation/AuthNavigator';
// import AdminNavigator from "./navigation/AdminNavigator";
// import UserNavigator from "./navigation/UserNavigator";
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  // role: 'admin' | 'user' | null

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // fake splash delay
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <NavigationContainer>
      <AuthNavigator setRole={setRole} />
    </NavigationContainer>
  );
}
