import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import HomeRoutes from './home.routes';
import {useAuth} from '../contexts/authContext';

import LoginRoutes from './login.routes';

const Routes = () => {
  const {logged, loading} = useAuth();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return logged ? <HomeRoutes /> : <LoginRoutes />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Routes;
