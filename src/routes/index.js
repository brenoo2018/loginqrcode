import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {useAuth} from '../contexts/authContext';

import LoginRoutes from './login.routes';
import HomeRoutes from './home.routes';
import PerfilRoutes from './perfil.routes';
import RegisterRoutes from './register.routes';

const Routes = () => {
  const {logged, loading} = useAuth();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#34cb79" />
      </View>
    );
  }

  return logged ? (
    <>
      <HomeRoutes />
      <PerfilRoutes />
    </>
  ) : (
    <>
      <LoginRoutes />
      <RegisterRoutes />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Routes;
