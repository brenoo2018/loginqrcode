import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';

const LoginStack = createStackNavigator();

const LoginRoutes = () => (
  <LoginStack.Navigator
    screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#fff'}}}>
    <LoginStack.Screen name="Login" component={Login} />
  </LoginStack.Navigator>
);

export default LoginRoutes;
