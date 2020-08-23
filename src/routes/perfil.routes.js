import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Perfil from '../pages/Perfil';

const PerfilStack = createStackNavigator();

const PerfilRoutes = () => (
  <PerfilStack.Navigator
    screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#fff'}}}>
    <PerfilStack.Screen name="Perfil" component={Perfil} />
  </PerfilStack.Navigator>
);

export default PerfilRoutes;
