import React from 'react';

import HomeRoutes from './home.routes';
import {useAuth} from '../contexts/authContext';

import LoginRoutes from './login.routes';

const Routes = () => {
  const {logged} = useAuth();

  return logged ? <HomeRoutes /> : <LoginRoutes />;
};

export default Routes;
