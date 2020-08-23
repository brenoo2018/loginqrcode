import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Register from '../pages/Register';

const RegisterStack = createStackNavigator();

const RegisterRoutes = () => (
  <RegisterStack.Navigator
    screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#fff'}}}>
    <RegisterStack.Screen name="Register" component={Register} />
  </RegisterStack.Navigator>
);

export default RegisterRoutes;
