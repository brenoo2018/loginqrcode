import React, {createContext, useContext, useState} from 'react';

import {login} from '../services/auth';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  async function loginUser(credentials) {
    const response = await login(credentials);

    setUser(response.user);
  }
  return (
    <AuthContext.Provider value={{logged: Boolean(user), user, loginUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
